import { useEffect, useState } from 'react'
import { type ProcessedPodcast } from '@/types/api'
import { type ProcessedPodcasts } from '@/types/props'
import { type useFilterReturn } from '@/types/responses'

export default function useFilterPodcast ({ podcasts }: ProcessedPodcasts): useFilterReturn {
  const [filteredPodcasts, setFilteredPodcasts] = useState<ProcessedPodcast[]>(podcasts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (filter === '') {
      setFilteredPodcasts(podcasts)
      return
    }

    const filteredPodcasts = podcasts.filter((podcast: ProcessedPodcast) => {
      const filterLower = filter.toLowerCase()
      const artistLower = podcast.artist.toLowerCase()
      const nameLower = podcast.name.toLowerCase()

      return artistLower.includes(filterLower) || nameLower.includes(filterLower)
    })

    setFilteredPodcasts(filteredPodcasts)
  }, [filter, podcasts])

  return { filteredPodcasts, setFilter }
}
