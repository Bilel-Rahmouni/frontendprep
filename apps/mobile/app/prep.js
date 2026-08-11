import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { getCategoryLabel, getTipsByCategory, PREP_CATEGORIES } from '@frontendprep/content'
import Screen from '../src/components/Screen'
import { spacing } from '../src/theme'
import { useTheme } from '../src/theme/ThemeContext'

export default function PrepScreen() {
  const [category, setCategory] = useState('all')
  const tips = useMemo(() => getTipsByCategory(category), [category])
  const { colors } = useTheme()

  return (
    <Screen>
      <View style={styles.chips}>
        {PREP_CATEGORIES.map((cat) => {
          const active = cat.id === category
          return (
            <Pressable
              key={cat.id}
              onPress={() => setCategory(cat.id)}
              style={[
                styles.chip,
                {
                  borderColor: active ? colors.textH : colors.border,
                  backgroundColor: active ? colors.textH : colors.surface,
                },
              ]}
            >
              <Text
                style={[styles.chipText, { color: active ? colors.bg : colors.textMuted }]}
              >
                {cat.label}
              </Text>
            </Pressable>
          )
        })}
      </View>

      <View style={styles.list}>
        {tips.map((tip) => (
          <View
            key={tip.id}
            style={[styles.card, { borderColor: colors.border, backgroundColor: colors.surface }]}
          >
            <Text style={[styles.cat, { color: colors.textMuted }]}>
              {getCategoryLabel(tip.category)}
            </Text>
            <Text style={[styles.title, { color: colors.textH }]}>{tip.title}</Text>
            <Text style={[styles.body, { color: colors.text }]}>{tip.body}</Text>
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
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  list: {
    gap: 10,
  },
  card: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
  },
  cat: {
    fontSize: 11,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
  },
})
