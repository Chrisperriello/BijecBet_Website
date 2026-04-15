import { createContext, useContext, useState, useEffect } from 'react'

const PlatformContext = createContext()

export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user-platform')
      if (saved) return saved
      
      const userAgent = window.navigator.userAgent.toLowerCase()
      if (userAgent.includes('mac')) return 'mac'
      if (userAgent.includes('win')) return 'windows'
    }
    return 'windows' // Default
  })

  useEffect(() => {
    localStorage.setItem('user-platform', platform)
  }, [platform])

  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  )
}

export function usePlatform() {
  const context = useContext(PlatformContext)
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider')
  }
  return context
}
