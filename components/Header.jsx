import { NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NAV = [
  { to: '/quiz', label: 'Tests' },
  { to: '/guides', label: 'Guides' },
  { to: '/prep', label: 'Prep' },
  { to: '/saved', label: 'Saved' },
]

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => navigate('/')}
          aria-label="frontendprep home"
        >
          <span className="site-header__mark" aria-hidden>
            FP
          </span>
          <span className="site-header__title">frontendprep</span>
        </button>

        <nav className="site-nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
