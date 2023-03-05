import { ITUNES_LOOKUP_URL, ALLORIGINS_URL } from './consts'

import { type APIResponse, type EpisodesResponse } from './types/api'

export const getPodcastEpisodesURL = (id: string): string =>
  `${ITUNES_LOOKUP_URL}?id=${id}&entity=podcastEpisode`

export const fetchAllowAllOrigins = async (url: string): Promise<APIResponse | EpisodesResponse> => {
  const response = await fetch(`${ALLORIGINS_URL}?url=${encodeURIComponent(url)}`)
  const jsonResponse = await response.json()

  return JSON.parse(jsonResponse.contents)
}

export const saveInLocalStorage = (key: string, value: any): void => {
  const jsonValue = {
    ...value,
    expiry: Date.now() + 1000 * 60 * 60 * 24 // 1 day
  }
  localStorage.setItem(key, JSON.stringify(jsonValue))
}

export const getFromLocalStorage = (key: string): any => {
  const jsonValue = localStorage.getItem(key)
  if (jsonValue !== null) {
    const value = JSON.parse(jsonValue)
    if (value.expiry < Date.now()) {
      localStorage.removeItem(key)
      return null
    }
    return value
  }
  return null
}
