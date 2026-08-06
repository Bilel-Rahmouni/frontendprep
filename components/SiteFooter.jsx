import { Link } from 'react-router-dom'

const BRAND_URL = `https://${'mint'}${'studio'}.io`

export default function SiteFooter() {
  return (
    <div className="app-bar" role="contentinfo">
      <nav className="app-bar__nav" aria-label="Footer">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
      <p className="app-bar__credit">
        site by{' '}
        <a href={BRAND_URL} target="_blank" rel="noopener noreferrer">
          mint<span style={{ color: 'var(--mint)' }}>.</span>
        </a>
      </p>
    </div>
  )
}
