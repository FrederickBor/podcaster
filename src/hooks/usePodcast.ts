import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PodcastContext } from '@context/PodcastContext'
import usePodcasts from '@hooks/usePodcasts'
import { type ProcessedPodcast } from '@/types/api'
import { type usePodcastReturn } from '@/types/responses'
import { type Nullable } from '@/types/common'

export default function usePodcast (): usePodcastReturn {
  usePodcasts(false)
  const { podcasts } = useContext(PodcastContext)
  const [podcast, setPodcast] = useState<Nullable<ProcessedPodcast>>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const params = useParams()

  let podcastId = ''
  if (params.podcastId !== undefined) {
    podcastId = params.podcastId.toString()
  }

  useEffect(() => {
    setLoading(true)

    if (podcasts !== null && podcasts.length > 0) {
      const podcast = podcasts.find(podcast => podcast.id === podcastId)

      if (podcast !== undefined) {
        setPodcast(podcast)
      }
    }

    setLoading(false)
  }, [podcastId, podcasts])

  return { podcast, isLoading }
}
