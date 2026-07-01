import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext.js'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className={`theme-toggle__icon ${isDark ? 'theme-toggle__icon--moon' : 'theme-toggle__icon--sun'}`} aria-hidden />
    </button>
  )
}
