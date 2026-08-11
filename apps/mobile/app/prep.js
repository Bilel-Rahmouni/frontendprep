import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { getCategoryLabel, getTipsByCategory, PREP_CATEGORIES } from '@frontendprep/content'
import Screen from '../src/components/Screen'
import { colors, spacing } from '../src/theme'

export default function PrepScreen() {
  const [category, setCategory] = useState('all')
  const tips = useMemo(() => getTipsByCategory(category), [category])

  return (
    <Screen title="Preparation" subtitle="Short tips between timed quizzes.">
      <View style={styles.chips}>
        {PREP_CATEGORIES.map((cat) => {
          const active = cat.id === category
          return (
            <Pressable
              key={cat.id}
              onPress={() => setCategory(cat.id)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{cat.label}</Text>
            </Pressable>
          )
        })}
      </View>

      <View style={styles.list}>
        {tips.map((tip) => (
          <View key={tip.id} style={styles.card}>
            <Text style={styles.cat}>{getCategoryLabel(tip.category)}</Text>
            <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.body}>{tip.body}</Text>
          </View>
        ))}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  chipActive: {
    backgroundColor: colors.textH,
    borderColor: colors.textH,
  },
  chipText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  chipTextActive: {
    color: colors.bg,
  },
  list: {
    gap: 10,
  },
  card: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    gap: 6,
  },
  cat: {
    fontSize: 11,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.textMuted,
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textH,
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
})
