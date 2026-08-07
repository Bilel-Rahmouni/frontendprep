import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { colors, spacing } from '../theme'
import AdBanner from './AdBanner'

/** Content shell under the Stack header — no extra top safe-area (avoids huge gap). */
export default function Screen({ title, subtitle, children, scroll = true, adSlot }) {
  const body = (
    <View style={styles.inner}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  )

  const content = scroll ? (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps="handled"
    >
      {body}
    </ScrollView>
  ) : (
    <View style={styles.flex}>{body}</View>
  )

  return (
    <View style={styles.root}>
      {content}
      {adSlot ? <AdBanner slot={adSlot} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    paddingBottom: spacing.xl + 16,
  },
  inner: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    gap: spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textH,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textMuted,
  },
})

