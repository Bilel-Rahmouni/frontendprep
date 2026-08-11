import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext.js'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      <button
        type="button"
        className={`theme-switch__btn ${!isDark ? 'theme-switch__btn--active' : ''}`}
        onClick={() => setTheme('light')}
        aria-pressed={!isDark}
      >
        Light
      </button>
      <button
        type="button"
        className={`theme-switch__btn ${isDark ? 'theme-switch__btn--active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-pressed={isDark}
      >
        Dark
      </button>
    </div>
  )
}
