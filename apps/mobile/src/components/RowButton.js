import { Pressable, StyleSheet, Text, View } from 'react-native'
import { spacing } from '../theme'
import { useTheme } from '../theme/ThemeContext'

export default function RowButton({ title, meta, onPress, right = '→' }) {
  const { colors } = useTheme()

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        {
          backgroundColor: pressed ? colors.bg : colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.copy}>
        <Text style={[styles.title, { color: colors.textH }]}>{title}</Text>
        {meta ? <Text style={[styles.meta, { color: colors.textMuted }]}>{meta}</Text> : null}
      </View>
      <Text style={[styles.right, { color: colors.textMuted }]}>{right}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingVertical: 16,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderRadius: 12,
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  meta: {
    fontSize: 13,
  },
  right: {
    fontSize: 18,
    fontWeight: '600',
  },
})
