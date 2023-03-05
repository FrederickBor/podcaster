import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '@context/LoadingContext'
import { PodcastContext } from '@context/PodcastContext'
import { PODCAST_LIST_URL } from '@constants'
import { getFromLocalStorage, saveInLocalStorage } from '@utils'
import { type ProcessedPodcast, type APIResponse, type Podcast } from '@/types/api'
import { type LocalStoragePodcasts } from '@/types/localStorage'
import { type ProcessedPodcasts } from '@/types/props'

export default function usePodcasts (setLoader = true): ProcessedPodcasts {
  const { setLoading } = useContext(LoadingContext)
  const { setPodcasts: setContextPodcasts } = useContext(PodcastContext)
  const [podcasts, setPodcasts] = useState<ProcessedPodcast[]>([])

  useEffect(() => {
    if (setLoader) { setLoading(true) }

    const fetchData = async (): Promise<void> => {
      const savedInfo: LocalStoragePodcasts = getFromLocalStorage('podcasts')
      if (savedInfo !== null) {
        setPodcasts(savedInfo.podcasts)
        setContextPodcasts(savedInfo.podcasts)
        if (setLoader) { setLoading(false) }
        return
      }

      const response = await fetch(PODCAST_LIST_URL)
      const jsonResponse: APIResponse = await response.json()

      const podcasts = jsonResponse.feed.entry.reduce((podcasts: ProcessedPodcast[], podcast: Podcast) => {
        const images = podcast['im:image']
        const image = images[images.length - 1]

        podcasts.push({
          id: podcast.id.attributes['im:id'],
          summary: podcast.summary.label,
          image: image.label,
          artist: podcast['im:artist'].label,
          name: podcast['im:name'].label
        })

        return podcasts
      }, [])

      setPodcasts(podcasts)
      setContextPodcasts(podcasts)
      saveInLocalStorage('podcasts', { podcasts })
      if (setLoader) { setLoading(false) }
    }

    fetchData().catch((error) => {
      console.error(error)
    })
  }, [])

  return { podcasts }
}
