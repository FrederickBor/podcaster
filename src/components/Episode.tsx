import { useState } from 'react'
import Loader from '@components/Loader/Loader'
import { type EpisodeProps } from '@/types/props'

export const Episode: React.FC<EpisodeProps> = ({ episode }) => {
  const [loadingAudio, setLoadingAudio] = useState(true)

  if (episode === null) {
    return <></>
  }

  return (
    <section className='border p-4 rounded text-xl break-words'>
      <b>{episode.trackName}</b>
      <p className='text-sm italic'>{episode.description}</p>
      <div className='flex gap-2'>
        {
          loadingAudio && <div className='m-3'>
            <Loader />
          </div>
        }
        <audio className='w-full' onCanPlay={() => { setLoadingAudio(false) }} controls>
          <source src={episode.episodeUrl} />
        </audio>
      </div>
    </section>
  )
}
