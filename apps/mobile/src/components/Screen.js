import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { spacing } from '../theme'
import { useTheme } from '../theme/ThemeContext'

/** Content shell under the Stack header — no extra top safe-area (avoids huge gap). */
export default function Screen({ title, subtitle, children, scroll = true }) {
  const { colors } = useTheme()

  const body = (
    <View style={styles.inner}>
      {title ? <Text style={[styles.title, { color: colors.textH }]}>{title}</Text> : null}
      {subtitle ? (
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>{subtitle}</Text>
      ) : null}
      {children}
    </View>
  )

  if (scroll) {
    return (
      <ScrollView
        style={[styles.root, { backgroundColor: colors.bg }]}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {body}
      </ScrollView>
    )
  }

  return <View style={[styles.root, { backgroundColor: colors.bg }]}>{body}</View>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
})
