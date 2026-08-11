export const ADSENSE_CLIENT = 'ca-pub-1493161259058671'

const SCRIPT_ID = 'adsbygoogle-js'

let loadPromise = null

export function loadAdSenseScript() {
  if (typeof document === 'undefined') return Promise.resolve()

  if (loadPromise) return loadPromise

  const existing = document.getElementById(SCRIPT_ID)
  if (existing) {
    // Tag already injected — wait until it finishes if still loading
    if (window.adsbygoogle?.loaded || existing.dataset.loaded === '1') {
      loadPromise = Promise.resolve()
      return loadPromise
    }
    loadPromise = new Promise((resolve, reject) => {
      existing.addEventListener('load', () => {
        existing.dataset.loaded = '1'
        resolve()
      })
      existing.addEventListener('error', () => reject(new Error('AdSense script failed to load')))
    })
    return loadPromise
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
    script.crossOrigin = 'anonymous'
    script.onload = () => {
      script.dataset.loaded = '1'
      resolve()
    }
    script.onerror = () => {
      loadPromise = null
      reject(new Error('AdSense script failed to load'))
    }
    document.head.appendChild(script)
  })

  return loadPromise
}

export function pushAd() {
  try {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  } catch {
    /* ignore */
  }
}
