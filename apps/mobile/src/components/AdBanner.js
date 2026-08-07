import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useConsent from '../hooks/useConsent'
import { getAdsModule, getBannerUnitId, initializeAds } from '../lib/ads'
import { colors, spacing } from '../theme'

/**
 * Anchored banner. Shown only after ads consent.
 * Quiz / exam screens should not mount this.
 */
export default function AdBanner({ slot = 'home' }) {
  const { ready, adsAllowed } = useConsent()
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const ads = getAdsModule()
  const unitId = getBannerUnitId(slot)

  useEffect(() => {
    if (!ready || !adsAllowed || !ads || !unitId) return undefined
    let cancelled = false
    initializeAds().then((ok) => {
      if (!ok || cancelled) setFailed(true)
    })
    return () => {
      cancelled = true
    }
  }, [ready, adsAllowed, ads, unitId])

  if (!ready || !adsAllowed) return null

  if (!ads || !unitId) {
    if (!__DEV__) return null
    return (
      <View style={styles.dev} accessibilityElementsHidden>
        <Text style={styles.devText}>Ads support the free quizzes</Text>
      </View>
    )
  }

  if (failed) return null

  const { BannerAd, BannerAdSize } = ads

  return (
    <View style={[styles.wrap, !loaded && styles.wrapPending]}>
      <BannerAd
        unitId={unitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        onAdLoaded={() => setLoaded(true)}
        onAdFailedToLoad={() => setFailed(true)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.bg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  wrapPending: {
    minHeight: 50,
  },
  dev: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  devText: {
    fontSize: 12,
    color: colors.textMuted,
  },
})
