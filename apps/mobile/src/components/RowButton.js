import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, spacing } from '../theme'

export default function RowButton({ title, meta, onPress, right = '→' }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        {meta ? <Text style={styles.meta}>{meta}</Text> : null}
      </View>
      <Text style={styles.right}>{right}</Text>
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
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  rowPressed: {
    backgroundColor: colors.bg,
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textH,
  },
  meta: {
    fontSize: 13,
    color: colors.textMuted,
  },
  right: {
    fontSize: 16,
    color: colors.textMuted,
  },
})
