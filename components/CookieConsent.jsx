import { Link } from 'react-router-dom'
import { useConsent } from '../hooks/useConsent'

export default function CookieConsent() {
  const { decided, accept, reject } = useConsent()

  if (decided) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div className="cookie-consent__inner">
        <p className="cookie-consent__text">
          We use cookies for optional ads that keep frontendprep free. Essential site features work
          without ads. See the <Link to="/privacy">Privacy Policy</Link>.
        </p>
        <div className="cookie-consent__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={reject}>
            Reject ads
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
