import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  getConsent,
  setConsent,
} from '../lib/consent'

const ConsentContext = createContext(null)

export function ConsentProvider({ children }) {
  const [consent, setConsentState] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    getConsent().then((value) => {
      if (!alive) return
      setConsentState(value)
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  const accept = useCallback(async () => {
    await setConsent(CONSENT_ACCEPTED)
    setConsentState(CONSENT_ACCEPTED)
  }, [])

  const reject = useCallback(async () => {
    await setConsent(CONSENT_REJECTED)
    setConsentState(CONSENT_REJECTED)
  }, [])

  const value = useMemo(
    () => ({
      ready,
      decided: consent != null,
      adsAllowed: consent === CONSENT_ACCEPTED,
      accept,
      reject,
    }),
    [ready, consent, accept, reject],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) {
    throw new Error('useConsent must be used within ConsentProvider')
  }
  return ctx
}
