import { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { getGuide } from '@frontendprep/content'
import Screen from '../../src/components/Screen'
import { spacing } from '../../src/theme'
import { useTheme } from '../../src/theme/ThemeContext'

function param(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export default function GuideDetailScreen() {
  const { slug: slugParam } = useLocalSearchParams()
  const slug = param(slugParam)
  const guide = getGuide(slug)
  const { colors } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ title: guide?.title || 'Guide' })
  }, [navigation, guide?.title])

  if (!guide) {
    return <Screen subtitle="Guide not found." />
  }

  return (
    <Screen subtitle={`${guide.category} · ${guide.readMinutes} min`}>
      {guide.sections.map((section) => (
        <View
          key={section.heading}
          style={[styles.section, { borderBottomColor: colors.border }]}
        >
          <Text style={[styles.heading, { color: colors.textH }]}>{section.heading}</Text>
          {section.paragraphs.map((p, i) => (
            <Text key={`${section.heading}-${i}`} style={[styles.p, { color: colors.text }]}>
              {p}
            </Text>
          ))}
        </View>
      ))}
    </Screen>
  )
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.sm,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  p: {
    fontSize: 15,
    lineHeight: 23,
  },
})
