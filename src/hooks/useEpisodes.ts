import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAllowAllOrigins, getFromLocalStorage, getPodcastEpisodesURL, saveInLocalStorage } from '@utils'
import { PodcastContext } from '@context/PodcastContext'
import { type EpisodesResponse, type PodcastEpisode } from '@/types/api'
import { type LocalStorageEpisodes } from '@/types/localStorage'
import { type useEpisodesReturn } from '@/types/responses'

export default function useEpisodes (): useEpisodesReturn {
  const { setEpisodes: setContextEpisodes, setTotalEpisodes: setContextTotalEpisodes } = useContext(PodcastContext)

  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [totalEpisodes, setTotalEpisodes] = useState(-1)
  const [isLoading, setLoading] = useState<boolean>(false)

  const params = useParams()
  let podcastId = ''
  if (params.podcastId !== undefined) {
    podcastId = params.podcastId.toString()
  }

  useEffect(() => {
    setLoading(true)

    const fetchData = async (): Promise<void> => {
      const savedInfo: LocalStorageEpisodes = getFromLocalStorage(`episodes-${podcastId}`)
      if (savedInfo !== null) {
        setEpisodes(savedInfo.episodes)
        setContextEpisodes(savedInfo.episodes)
        setTotalEpisodes(savedInfo.totalEpisodes)
        setContextTotalEpisodes(savedInfo.totalEpisodes)
        setLoading(false)
        return
      }

      let data
      try {
        const response = await fetch(getPodcastEpisodesURL(podcastId))
        data = await response.json()
      } catch (error) {
        data = await fetchAllowAllOrigins(getPodcastEpisodesURL(podcastId)) as EpisodesResponse
      }

      // Take only the data we need
      const episodes = data.results.reduce(
        (episodes: PodcastEpisode[], episode: PodcastEpisode) => {
          if (episode.wrapperType !== 'track') {
            episodes.push({
              wrapperType: episode.wrapperType,
              releaseDate: episode.releaseDate,
              trackName: episode.trackName,
              trackId: episode.trackId,
              trackTimeMillis: episode.trackTimeMillis,
              episodeUrl: episode.episodeUrl,
              description: episode.description
            })
          }

          return episodes
        }, []
      )

      const numberOfEpisodes = episodes.length

      setEpisodes(episodes)
      setContextEpisodes(episodes)
      setTotalEpisodes(numberOfEpisodes)
      setContextTotalEpisodes(numberOfEpisodes)
      saveInLocalStorage(`episodes-${podcastId}`, { episodes, totalEpisodes: numberOfEpisodes })
      setLoading(false)
    }

    fetchData().catch((error) => {
      console.error(error)
    })
  }, [podcastId])

  return { episodes, totalEpisodes, isLoading }
}
