import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useEpisodes from '@hooks/useEpisodes'
import { PodcastContext } from '@context/PodcastContext'
import { type PodcastEpisode } from '@/types/api'
import { type useEpisodeReturn } from '@/types/responses'
import { type Nullable } from '@/types/common'

export default function useEpisode (): useEpisodeReturn {
  useEpisodes()
  const { episodes } = useContext(PodcastContext)
  const [episode, setEpisode] = useState<Nullable<PodcastEpisode>>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  const params = useParams()

  let episodeId = 0
  if (params.episodeId !== undefined) {
    episodeId = parseInt(params.episodeId)
  }

  useEffect(() => {
    setLoading(true)

    if (episodes !== null && episodes.length > 0) {
      const episode = episodes.find(episode => episode.trackId === episodeId)

      if (episode !== undefined) {
        setEpisode(episode)
      }
    }

    setLoading(false)
  }, [episodeId, episodes])

  return { episode, isLoading }
}
