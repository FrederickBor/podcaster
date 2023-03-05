import { useContext, useEffect } from 'react'
import useEpisode from '@hooks/useEpisode'
import usePodcast from '@hooks/usePodcast'
import { LoadingContext } from '@context/LoadingContext'
import { type usePodcastAndEpisodeReturn } from '@/types/responses'

export default function usePodcastAndEpisode (): usePodcastAndEpisodeReturn {
  const { podcast, isLoading: isLoadingPodcast } = usePodcast()
  const { episode, isLoading: isLoadingEpisode } = useEpisode()
  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    setLoading(isLoadingPodcast || isLoadingEpisode)
  }, [isLoadingPodcast, isLoadingEpisode])

  return { podcast, episode }
}
