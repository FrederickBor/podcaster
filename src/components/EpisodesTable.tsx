import { Link, useParams } from 'react-router-dom'
import { TABLE_SPACING } from '@constants'
import { type PodcastEpisode } from '@/types/api'
import { type EpisodesTableProps, type EpisodeRowProps } from '@/types/props'

const EpisodeRow: React.FC<EpisodeRowProps> = ({ trackId, trackName, releaseDate, trackTimeMillis = 0, index, podcastId }) => {
  const date = new Date(releaseDate)
  const duration = new Date(trackTimeMillis)

  let className = index % 2 === 0 ? 'bg-gray-100' : ''
  className += ' border-b border-b-gray-300 font-medium hover:bg-gray-200'

  return (
    <tr className={className} >
      <td className={TABLE_SPACING}>
        <Link to={`/podcast/${podcastId}/episode/${trackId}`} className='text-blue-500'>
          {trackName}
        </Link>
      </td>
      <td className={TABLE_SPACING}>{date.toLocaleDateString()}</td>
      <td className={TABLE_SPACING}>{duration.toLocaleTimeString()}</td>
    </tr>
  )
}

const EpisodesTable: React.FC<EpisodesTableProps> = ({ episodes }) => {
  const params = useParams()
  let podcastId = ''
  if (params.podcastId !== undefined) {
    podcastId = params.podcastId.toString()
  }

  return (
    <table className='w-full text-sm text-left'>
      <thead className='text-xs uppercase border-b border-b-gray-300'>
        <tr>
          <th className={TABLE_SPACING}>Title</th>
          <th className={TABLE_SPACING}>Date</th>
          <th className={TABLE_SPACING}>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode: PodcastEpisode, index) => {
          return <EpisodeRow key={episode.trackId} {...episode} index={index} podcastId={podcastId} />
        })
        }
      </tbody>
    </table>
  )
}

export default EpisodesTable
