import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  getAdsModule,
  getBannerUnitId,
  hasAdsNativeModule,
  initializeAds,
} from '../lib/ads'
import { useTheme } from '../theme/ThemeContext'

/** Anchored adaptive banners are 50–90dp (≤15% of screen height). */
export const BANNER_MIN_HEIGHT = 50
export const BANNER_MAX_HEIGHT = 90

/** Anchored banner + bottom safe area. Quiz screens should not mount this. */
export default function AdBanner({ slot = 'home' }) {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()
  const [sdkReady, setSdkReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const nativeReady = hasAdsNativeModule()
  const ads = nativeReady ? getAdsModule() : null
  const unitId = nativeReady ? getBannerUnitId(slot) : null
  const bottomPad = Math.max(insets.bottom, 0)

  useEffect(() => {
    if (!ads || !unitId) return undefined
    let cancelled = false
    initializeAds().then((ok) => {
      if (cancelled) return
      if (ok) setSdkReady(true)
      else setFailed(true)
    })
    return () => {
      cancelled = true
    }
  }, [ads, unitId])

  if (!nativeReady || !ads || !unitId || failed) return null

  const shellStyle = [
    styles.shell,
    {
      paddingBottom: bottomPad,
      backgroundColor: colors.bg,
      borderTopColor: colors.border,
      minHeight: BANNER_MIN_HEIGHT + bottomPad,
    },
  ]

  // Reserve height once native ads exist so content doesn't jump when the banner mounts.
  if (!sdkReady) {
    return <View style={shellStyle} />
  }

  const { BannerAd, BannerAdSize } = ads

  return (
    <View style={shellStyle}>
      <View style={[styles.slot, !loaded && styles.slotPending, { backgroundColor: colors.bg }]}>
        <BannerAd
          unitId={unitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
          onAdLoaded={() => setLoaded(true)}
          onAdFailedToLoad={() => setFailed(true)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    borderTopWidth: 1,
  },
  slot: {
    width: '100%',
    maxHeight: BANNER_MAX_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  slotPending: {
    minHeight: BANNER_MIN_HEIGHT,
  },
})
