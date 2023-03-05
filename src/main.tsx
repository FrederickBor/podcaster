import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import Podcast from './pages/Podcast'
import Episode from './pages/Episode'
import ErrorPage from './pages/ErrorPage'

import './index.css'
import { LoadingProvider } from './context/LoadingContext'
import { PodcastProvider } from './context/PodcastContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'podcast/:podcastId',
    element: <Podcast />
  },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    element: <Episode />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LoadingProvider>
    <PodcastProvider>
      <RouterProvider router={router} />
    </PodcastProvider>
  </LoadingProvider>
)
