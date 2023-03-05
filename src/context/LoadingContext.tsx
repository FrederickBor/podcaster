import { createContext, useState } from 'react'
import { type PropsWithMandatoryChildren } from '@/types/common'

export const LoadingContext = createContext({
  loading: false,
  setLoading: (loading: boolean) => { }
})

export const LoadingProvider: React.FC<PropsWithMandatoryChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{
      loading,
      setLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}
