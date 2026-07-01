const BRAND_URL = `https://${'mint'}${'studio'}.io`

export default function SiteFooter() {
  return (
    <div className="app-bar" role="contentinfo">
      site by{' '}
      <a href={BRAND_URL} target="_blank" rel="noopener noreferrer">
        mint<span style={{ color: 'var(--mint)' }}>.</span>
      </a>
    </div>
  )
}
