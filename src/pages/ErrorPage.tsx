import { MainLayout } from '@layouts/MainLayout'
import PodcastImage from '@assets/podcaster.svg'

const ErrorPage: React.FC = () => {
  console.error('Page not found')
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center w-full">
        <section className="flex flex-col justify-center items-center border border-slate-200 p-5 shadow-md mt-16 mb-5 w-80">
          <img className='rounded-full h-20' src={PodcastImage} alt='Page not found image' />
          <section className='text-center'>
            <b className='text-xs uppercase'>Oops!</b>
            <p className='text-sm'>This page was not found.</p>
          </section>
        </section>
      </div>
    </MainLayout>
  )
}

export default ErrorPage
