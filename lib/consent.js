const KEY = 'frontend-prep-consent'

export const CONSENT_ACCEPTED = 'accepted'
export const CONSENT_REJECTED = 'rejected'

export function getConsent() {
  try {
    const value = localStorage.getItem(KEY)
    if (value === CONSENT_ACCEPTED || value === CONSENT_REJECTED) return value
  } catch {
    /* ignore */
  }
  return null
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event('consent-changed'))
}

export function hasAcceptedAds() {
  return getConsent() === CONSENT_ACCEPTED
}
