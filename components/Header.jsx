import { NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => navigate('/quiz')}
          aria-label="frontendprep home"
        >
          <span className="site-header__mark">
            <span className="site-header__mark-core">FP</span>
          </span>
          <div className="site-header__text">
            <span className="site-header__title">frontendprep</span>
            <span className="site-header__subtitle">Exam simulator</span>
          </div>
        </button>

        <nav className="site-nav" aria-label="Main">
          <NavLink
            to="/quiz"
            end
            className={({ isActive }) =>
              `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
            }
          >
            <span className="site-nav__icon" aria-hidden>◆</span>
            Tests
          </NavLink>
          <NavLink
            to="/prep"
            className={({ isActive }) =>
              `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
            }
          >
            <span className="site-nav__icon" aria-hidden>◇</span>
            Preparation
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
            }
          >
            <span className="site-nav__icon" aria-hidden>☆</span>
            Saved
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
