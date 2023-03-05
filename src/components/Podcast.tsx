import { Link } from 'react-router-dom'
import { type PodcastProps } from '@/types/props'

export const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  if (podcast === null) {
    return <></>
  }

  const { id, image, name, artist, summary } = podcast

  return (
    <aside className='flex flex-col w-1/4 border text-sm p-3 rounded h-fit mb-5'>
      <div className='border-b pb-3 mb-3 w-full'>
        <Link to={`/podcast/${id}`}>
          <img className='m-auto rounded w-3/4' src={image} alt={name} />
        </Link>
      </div>
      <div className='border-b pb-3 mb-3 w-full' >
        <Link to={`/podcast/${id}`}>
          <b>{name}</b>
          <p className='italic'>by {artist}</p>
        </Link>
      </div>
      <div className='break-words'>
        <b>Description:</b>
        <p className='italic'>{summary}</p>
      </div>
    </aside >
  )
}
