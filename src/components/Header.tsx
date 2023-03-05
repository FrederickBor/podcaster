import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoadingContext } from '@context/LoadingContext'
import Loader from '@components/Loader/Loader'

export const Header: React.FC = () => {
  const { loading } = useContext(LoadingContext)

  return (
    <header className='flex justify-between border-b border-b-slate-200 my-2 pb-2'>
      <Link to="/" className='text-2xl text-blue-500'>
        Podcaster
      </Link>
      {loading && <Loader />}
    </header >
  )
}
