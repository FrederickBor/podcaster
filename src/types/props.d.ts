import { type ProcessedPodcast, type PodcastEpisode } from '@/types/api'
import { type Nullable, type PropsWithMandatoryChildren } from '@/types/common'

export interface PodcastCardProps {
  podcast: ProcessedPodcast
}

export interface EpisodeProps {
  episode: Nullable<PodcastEpisode>
}

export interface EpisodeListProps {
  episodes: PodcastEpisode[]
  totalEpisodes: number
}

export interface EpisodesTableProps {
  episodes: PodcastEpisode[]
}

export interface EpisodeRowProps extends PodcastEpisode {
  index: number
  podcastId: string
}

export interface PodcastProps {
  podcast: Nullable<ProcessedPodcast>
}

export interface PodcastContextProps {
  podcasts: ProcessedPodcast[]
  setPodcasts: (podcasts: ProcessedPodcast[]) => void
  episodes: PodcastEpisode[]
  setEpisodes: (episodes: PodcastEpisode[]) => void
  totalEpisodes: number
  setTotalEpisodes: (totalEpisodes: number) => void
}

export interface PodcastLayoutProps extends PropsWithMandatoryChildren {
  podcast: Nullable<ProcessedPodcast>
}

export interface ProcessedPodcasts {
  podcasts: ProcessedPodcast[]
}
