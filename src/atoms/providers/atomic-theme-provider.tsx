'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { AtomicThemeMode } from '../../tokens/enums/atomic-enums'

type Theme = 'light' | 'dark' | 'system'

interface AtomicThemeProviderContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light' | 'dark'
}

const AtomicThemeProviderContext = createContext<AtomicThemeProviderContextProps | undefined>(undefined)

export interface AtomicThemeProviderProps {
  children: React.ReactNode
  /** Default theme to use */
  defaultTheme?: Theme
  /** Storage key for theme persistence */
  storageKey?: string
  /** Custom attribute name for theme */
  attribute?: string
  /** Enable system theme detection */
  enableSystem?: boolean
  /** Disable theme transitions */
  disableTransitionOnChange?: boolean
}

const AtomicThemeProvider: React.FC<AtomicThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'atomic-theme',
  attribute = 'data-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme
    
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored as Theme
      }
    } catch {}
    
    return defaultTheme
  })

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light')

  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem(storageKey, newTheme)
    } catch {}
    
    setThemeState(newTheme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    const resolvedTheme = theme === 'system' && enableSystem ? getSystemTheme() : theme as 'light' | 'dark'
    
    setActualTheme(resolvedTheme)

    if (disableTransitionOnChange) {
      const css = document.createElement('style')
      css.appendChild(
        document.createTextNode(
          '* { transition: none !important; transform: none !important; animation: none !important; }'
        )
      )
      document.head.appendChild(css)
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.head.removeChild(css)
        })
      })
    }

    root.setAttribute(attribute, resolvedTheme)
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [theme, attribute, enableSystem, disableTransitionOnChange])

  useEffect(() => {
    if (!enableSystem || theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      const systemTheme = getSystemTheme()
      setActualTheme(systemTheme)
      
      const root = window.document.documentElement
      root.setAttribute(attribute, systemTheme)
      root.classList.remove('light', 'dark')
      root.classList.add(systemTheme)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, attribute, enableSystem])

  const value = {
    theme,
    setTheme,
    actualTheme,
  }

  return (
    <AtomicThemeProviderContext.Provider value={value}>
      {children}
    </AtomicThemeProviderContext.Provider>
  )
}

const useAtomicTheme = () => {
  const context = useContext(AtomicThemeProviderContext)
  
  if (context === undefined) {
    throw new Error('useAtomicTheme must be used within an AtomicThemeProvider')
  }
  
  return context
}

export { AtomicThemeProvider, useAtomicTheme, type AtomicThemeProviderContextProps }