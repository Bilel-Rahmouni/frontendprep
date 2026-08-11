import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { readJson, writeJson } from '../lib/storage'
import { darkColors, lightColors } from '../theme'

const STORAGE_KEY = 'theme'
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    readJson(STORAGE_KEY, 'light').then((value) => {
      if (!alive) return
      setThemeState(value === 'dark' ? 'dark' : 'light')
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  const setTheme = useCallback(async (next) => {
    const value = next === 'dark' ? 'dark' : 'light'
    setThemeState(value)
    await writeJson(STORAGE_KEY, value)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  const colors = theme === 'dark' ? darkColors : lightColors

  const value = useMemo(
    () => ({
      ready,
      theme,
      isDark: theme === 'dark',
      colors,
      setTheme,
      toggleTheme,
    }),
    [ready, theme, colors, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
