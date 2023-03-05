import { Link } from 'react-router-dom'
import usePodcasts from '@hooks/usePodcasts'
import useFilterPodcast from '@hooks/useFilterPodcasts'
import { type ProcessedPodcast } from '@/types/api'
import { type PodcastCardProps } from '@/types/props'

import './PodcastList.css'

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const { id, name, image, artist } = podcast
  return (
    <Link to={`/podcast/${id}`} className="flex flex-col justify-center items-center border border-slate-200 p-5 shadow-md mt-16 mb-5">
      <div className='card-img border border-slate-200'>
        <img className='rounded-full h-20 podcast-image' src={image} alt={name} />
      </div>
      <section className='text-center'>
        <b className='text-xs uppercase'>{name}</b>
        <p className='text-sm'>Author: {artist}</p>
      </section>
    </Link>
  )
}

const PodcastPreview: React.FC = () => {
  const { podcasts } = usePodcasts()
  const { filteredPodcasts, setFilter } = useFilterPodcast({ podcasts })

  if (podcasts === null) {
    return <></>
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value)
  }

  return (
    <>
      <section className='mr-0 ml-auto w-fit'>
        <span className="bg-blue-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{filteredPodcasts.length}</span>
        <input type='text' className='border rounded p-1 px-3' placeholder='Filter podcasts...' onChange={handleFilter} />
      </section>
      <div className="grid gap-4 grid-content">
        {filteredPodcasts.map((podcast: ProcessedPodcast) => {
          return <PodcastCard key={podcast.id} podcast={podcast} />
        })}
      </div>
    </>
  )
}

export default PodcastPreview
