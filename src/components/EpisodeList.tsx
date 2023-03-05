import EpisodesTable from '@components/EpisodesTable'
import { type EpisodeListProps } from '@/types/props'

export const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, totalEpisodes }) => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='border p-3 rounded text-xl'>
        <b>Episodes: { totalEpisodes === -1 ? '-' : totalEpisodes}</b>
      </div>

      <div className='border px-6 py-3 rounded'>
        { totalEpisodes > -1 && <EpisodesTable episodes={episodes} />}
      </div>
    </section>
  )
}
