import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { colors, spacing } from '../theme'

/** Content shell under the Stack header — no extra top safe-area (avoids huge gap). */
export default function Screen({ title, subtitle, children, scroll = true }) {
  const body = (
    <View style={styles.inner}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  )

  if (scroll) {
    return (
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {body}
      </ScrollView>
    )
  }

  return <View style={styles.root}>{body}</View>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: spacing.lg,
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
