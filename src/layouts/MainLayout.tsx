import { Header } from '@components/Header'
import { type PropsWithMandatoryChildren } from '@/types/common'

export const MainLayout: React.FC<PropsWithMandatoryChildren> = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-center bg-slate-100">
      <div className='w-3/4'>
        <Header />
        {children}
      </div>
    </div>
  )
}
