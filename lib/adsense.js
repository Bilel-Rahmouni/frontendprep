export const ADSENSE_CLIENT = 'ca-pub-1493161259058671'

const SCRIPT_ID = 'adsbygoogle-js'

export function loadAdSenseScript() {
  if (typeof document === 'undefined') return Promise.resolve()
  if (document.getElementById(SCRIPT_ID)) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
    script.crossOrigin = 'anonymous'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('AdSense script failed to load'))
    document.head.appendChild(script)
  })
}

export function pushAd() {
  try {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  } catch {
    /* ignore */
  }
}
