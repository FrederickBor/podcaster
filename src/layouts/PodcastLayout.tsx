import { Podcast } from '@components/Podcast'
import { MainLayout } from '@layouts/MainLayout'
import { type PodcastLayoutProps } from '@/types/props'

export const PodcastLayout: React.FC<PodcastLayoutProps> = ({ children, podcast }) => {
  return (
    <MainLayout >
      <div className='flex gap-10'>
        <Podcast podcast={podcast} />
        <main className="w-5/6">
          {children}
        </main>
      </div>
    </MainLayout>
  )
}
