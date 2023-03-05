import { useContext, useEffect } from 'react'
import useEpisodes from '@hooks/useEpisodes'
import usePodcast from '@hooks/usePodcast'
import { LoadingContext } from '@context/LoadingContext'
import { type usePodcastAndEpisodesReturn } from '@/types/responses'

export default function usePodcastAndEpisodes (): usePodcastAndEpisodesReturn {
  const { podcast, isLoading: isLoadingPodcast } = usePodcast()
  const { episodes, totalEpisodes, isLoading: isLoadingEpisodes } = useEpisodes()
  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    setLoading(isLoadingPodcast || isLoadingEpisodes)
  }, [isLoadingPodcast, isLoadingEpisodes])

  return { podcast, episodes, totalEpisodes }
}
