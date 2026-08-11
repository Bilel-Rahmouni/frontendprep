import Constants from 'expo-constants'
import { NativeModules, TurboModuleRegistry } from 'react-native'

/** Production banner unit from AdMob (frontendprep_banner). */
const DEFAULT_BANNER_UNIT = 'ca-app-pub-1493161259058671/2391693723'

const SLOT_ENV = {
  home: process.env.EXPO_PUBLIC_ADMOB_BANNER_HOME || DEFAULT_BANNER_UNIT,
  guide: process.env.EXPO_PUBLIC_ADMOB_BANNER_GUIDE || DEFAULT_BANNER_UNIT,
  prep: process.env.EXPO_PUBLIC_ADMOB_BANNER_PREP || DEFAULT_BANNER_UNIT,
}

const ADS_MODULE_NAME = 'RNGoogleMobileAdsModule'

let adsModule = null
let adsLoadAttempted = false

function isExpoGo() {
  return (
    Constants.appOwnership === 'expo' ||
    Constants.executionEnvironment === 'storeClient'
  )
}

function nativeAdsModulePresent() {
  try {
    if (typeof TurboModuleRegistry?.get === 'function') {
      if (TurboModuleRegistry.get(ADS_MODULE_NAME) != null) return true
    }
  } catch {
    /* ignore */
  }
  return NativeModules?.[ADS_MODULE_NAME] != null
}

/** True only when the AdMob native binary is actually linked into this build. */
export function hasAdsNativeModule() {
  if (isExpoGo()) return false
  return nativeAdsModulePresent()
}

export function getAdsModule() {
  if (adsLoadAttempted) return adsModule
  adsLoadAttempted = true

  // Never require the package unless the native module is already registered.
  // require() itself calls getEnforcing and crashes Expo Go even inside try/catch (LogBox).
  if (!hasAdsNativeModule()) {
    adsModule = null
    return null
  }

  try {
    // eslint-disable-next-line global-require
    adsModule = require('react-native-google-mobile-ads')
  } catch {
    adsModule = null
  }
  return adsModule
}

export function getBannerUnitId(slot = 'home') {
  if (!hasAdsNativeModule()) return null

  const ads = getAdsModule()
  if (!ads) return null

  if (__DEV__) return ads.TestIds.BANNER

  return SLOT_ENV[slot] || null
}

let initPromise = null

export function initializeAds() {
  if (!hasAdsNativeModule()) return Promise.resolve(false)

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
