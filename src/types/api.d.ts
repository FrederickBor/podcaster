export interface Podcast {
  'im:name': {
    label: string
  }
  'im:image': Array<{
    label: string
    attributes: {
      height: string
    }
  }>
  summary: {
    label: string
  }
  'im:artist': {
    label: string
  }
  id: {
    attributes: {
      'im:id': string
    }
  }
}

export interface ProcessedPodcast {
  id: string
  summary: string
  name: string
  image: string
  artist: string
}

export interface PodcastEpisode {
  wrapperType: string
  releaseDate: string
  trackName: string
  trackId: number
  trackTimeMillis?: number
  episodeUrl?: string
  description?: string
}

export interface APIResponse {
  feed: {
    entry: Podcast[]
  }
}

export interface EpisodesResponse {
  resultCount: number
  results: PodcastEpisode[]
}
