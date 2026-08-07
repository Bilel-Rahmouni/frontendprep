import { useCallback, useSyncExternalStore } from 'react'
import {
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  getConsent,
  hasAcceptedAds,
  setConsent,
} from '../lib/consent'

function subscribe(cb) {
  window.addEventListener('consent-changed', cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener('consent-changed', cb)
    window.removeEventListener('storage', cb)
  }
}

function getSnapshot() {
  return getConsent() ?? ''
}

export function useConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => '')
  const consent = raw || null

  const accept = useCallback(() => setConsent(CONSENT_ACCEPTED), [])
  const reject = useCallback(() => setConsent(CONSENT_REJECTED), [])

  return {
    consent,
    decided: consent === CONSENT_ACCEPTED || consent === CONSENT_REJECTED,
    adsAllowed: hasAcceptedAds(),
    accept,
    reject,
  }
}
