import { NavLink, useNavigate } from 'react-router-dom'
import BrandLogo from './BrandLogo'
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
          <BrandLogo className="site-header__logo" />
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
