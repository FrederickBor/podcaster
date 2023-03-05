import { PodcastLayout } from '@layouts/PodcastLayout'
import { Episode as EpisodeInfo } from '@components/Episode'
import usePodcastAndEpisode from '@hooks/usePodcastAndEpisode'

const Episode: React.FC = () => {
  const { podcast, episode } = usePodcastAndEpisode()

  return (
    <PodcastLayout podcast={podcast}>
      <EpisodeInfo episode={episode}/>
    </PodcastLayout>
  )
}

export default Episode
