import { createContext, useState } from 'react'
import { type PodcastEpisode, type ProcessedPodcast } from '@/types/api'
import { type PodcastContextProps } from '@/types/props'
import { type PropsWithMandatoryChildren } from '@/types/common'

export const PodcastContext = createContext<PodcastContextProps>({
  podcasts: [],
  setPodcasts: () => { },
  episodes: [],
  setEpisodes: () => { },
  totalEpisodes: -1,
  setTotalEpisodes: () => { }
})

export const PodcastProvider: React.FC<PropsWithMandatoryChildren> = ({ children }) => {
  const [podcasts, setPodcasts] = useState<ProcessedPodcast[]>([])
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [totalEpisodes, setTotalEpisodes] = useState(-1)

  return (
    <PodcastContext.Provider value={{
      podcasts,
      setPodcasts,
      episodes,
      setEpisodes,
      totalEpisodes,
      setTotalEpisodes
    }}>
      {children}
    </PodcastContext.Provider>
  )
}
