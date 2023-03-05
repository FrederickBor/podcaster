import PodcastList from '@components/PodcastList/PodcastList'
import { MainLayout } from '@layouts/MainLayout'

const Home: React.FC = () => {
  return (
    <MainLayout>
      <PodcastList />
    </MainLayout>
  )
}

export default Home
