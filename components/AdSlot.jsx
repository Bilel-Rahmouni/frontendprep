import { useEffect, useRef } from 'react'
import { useConsent } from '../hooks/useConsent'
import { ADSENSE_CLIENT, loadAdSenseScript, pushAd } from '../lib/adsense'

const SLOT_ENV = {
  home: import.meta.env.VITE_ADSENSE_SLOT_HOME,
  guide: import.meta.env.VITE_ADSENSE_SLOT_GUIDE,
  prep: import.meta.env.VITE_ADSENSE_SLOT_PREP,
}

export default function AdSlot({ slot = 'home', className = '' }) {
  const { adsAllowed } = useConsent()
  const slotId = SLOT_ENV[slot]
  const pushed = useRef(false)

  useEffect(() => {
    if (!adsAllowed || !slotId || pushed.current) return undefined
    let cancelled = false

    loadAdSenseScript()
      .then(() => {
        if (cancelled || pushed.current) return
        pushed.current = true
        pushAd()
      })
      .catch(() => {
        /* ignore load failures */
      })

    return () => {
      cancelled = true
    }
  }, [adsAllowed, slotId])

  if (!adsAllowed) return null

  if (!slotId) {
    if (!import.meta.env.DEV) return null
    return (
      <aside className={`ad-slot ad-slot--dev ${className}`.trim()} aria-hidden>
        Ads support the free quizzes
      </aside>
    )
  }

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
