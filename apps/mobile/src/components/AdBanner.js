import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  getAdsModule,
  getBannerUnitId,
  hasAdsNativeModule,
  initializeAds,
} from '../lib/ads'
import { colors } from '../theme'

/** Anchored adaptive banners are 50–90dp (≤15% of screen height). */
export const BANNER_MIN_HEIGHT = 50
export const BANNER_MAX_HEIGHT = 90

/** Anchored banner + bottom safe area. Quiz screens should not mount this. */
export default function AdBanner({ slot = 'home' }) {
  const insets = useSafeAreaInsets()
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const nativeReady = hasAdsNativeModule()
  const ads = nativeReady ? getAdsModule() : null
  const unitId = nativeReady ? getBannerUnitId(slot) : null

  useEffect(() => {
    if (!ads || !unitId) return undefined
    let cancelled = false
    initializeAds().then((ok) => {
      if (!ok || cancelled) setFailed(true)
    })
    return () => {
      cancelled = true
    }
  }, [ads, unitId])

  if (!ads || !unitId || failed) return null

  const { BannerAd, BannerAdSize } = ads
  const bottomPad = Math.max(insets.bottom, 0)

  return (
    <View style={[styles.shell, { paddingBottom: bottomPad }]}>
      <View style={[styles.slot, !loaded && styles.slotPending]}>
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
    backgroundColor: colors.bg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  slot: {
    width: '100%',
    maxHeight: BANNER_MAX_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.bg,
  },
  slotPending: {
    minHeight: BANNER_MIN_HEIGHT,
  },
})
