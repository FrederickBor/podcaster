import { type PodcastEpisode } from '@/types/api'
import { type Nullable } from '@/types/common'

export interface useEpisodeReturn {
  episode: Nullable<PodcastEpisode>
  isLoading: boolean
}

export interface useEpisodesReturn {
  episodes: PodcastEpisode[]
  totalEpisodes: number
  isLoading: boolean
}

export interface useFilterReturn {
  filteredPodcasts: ProcessedPodcast[]
  setFilter: (filter: string) => void
}

export interface usePodcastReturn {
  podcast: Nullable<ProcessedPodcast>
  isLoading: boolean
}

export interface usePodcastAndEpisodeReturn {
  podcast: Nullable<ProcessedPodcast>
  episode: Nullable<PodcastEpisode>
}

export interface usePodcastAndEpisodesReturn {
  podcast: Nullable<ProcessedPodcast>
  episodes: PodcastEpisode[]
  totalEpisodes: number
}
