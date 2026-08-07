import { Pressable, StyleSheet, Text, View } from 'react-native'
import useConsent from '../hooks/useConsent'
import { colors, spacing } from '../theme'

export default function AdsConsentBanner() {
  const { ready, decided, accept, reject } = useConsent()

  if (!ready || decided) return null

  return (
    <View style={styles.root} accessibilityRole="alert">
      <Text style={styles.text}>
        Optional ads keep frontendprep free. You can reject ads and keep using the app.
      </Text>
      <View style={styles.actions}>
        <Pressable onPress={reject} style={styles.ghost} accessibilityRole="button">
          <Text style={styles.ghostText}>Reject ads</Text>
        </Pressable>
        <Pressable onPress={accept} style={styles.primary} accessibilityRole="button">
          <Text style={styles.primaryText}>Accept</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing.sm,
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.sm,
  },
  ghost: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghostText: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.textH,
  },
  primary: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.textH,
  },
  primaryText: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.bg,
  },
})
