const SLOT_ENV = {
  home: process.env.EXPO_PUBLIC_ADMOB_BANNER_HOME,
  guide: process.env.EXPO_PUBLIC_ADMOB_BANNER_GUIDE,
  prep: process.env.EXPO_PUBLIC_ADMOB_BANNER_PREP,
}

let adsModule = null
let adsLoadAttempted = false

export function getAdsModule() {
  if (adsLoadAttempted) return adsModule
  adsLoadAttempted = true
  try {
    // Native module — requires a custom/dev build (not Expo Go).
    // eslint-disable-next-line global-require
    adsModule = require('react-native-google-mobile-ads')
  } catch {
    adsModule = null
  }
  return adsModule
}

export function getBannerUnitId(slot = 'home') {
  const ads = getAdsModule()
  if (!ads) return null

  if (__DEV__) return ads.TestIds.BANNER

  const unitId = SLOT_ENV[slot]
  return unitId || null
}

let initPromise = null

export function initializeAds() {
  const ads = getAdsModule()
  if (!ads) return Promise.resolve(false)
  if (!initPromise) {
    initPromise = ads
      .default()
      .initialize()
      .then(() => true)
      .catch(() => false)
  }
  return initPromise
}

export function adsNativeAvailable() {
  return getAdsModule() != null
}
