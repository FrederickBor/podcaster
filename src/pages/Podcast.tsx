import { EpisodeList } from '@components/EpisodeList'
import usePodcastAndEpisodes from '@hooks/usePodcastAndEpisodes'
import { PodcastLayout } from '@layouts/PodcastLayout'

const Podcast: React.FC = () => {
  const { podcast, episodes, totalEpisodes } = usePodcastAndEpisodes()

  return (
    <PodcastLayout podcast={podcast}>
      <EpisodeList episodes={episodes} totalEpisodes={totalEpisodes} />
    </PodcastLayout >
  )
}

export default Podcast
