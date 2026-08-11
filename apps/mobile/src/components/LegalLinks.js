import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { AD_PRIVACY_URL, DELETE_DATA_URL, PRIVACY_URL } from '../lib/links'
import { spacing } from '../theme'
import { useTheme } from '../theme/ThemeContext'

const LINKS = [
  { label: 'Privacy', url: PRIVACY_URL },
  { label: 'Ad privacy', url: AD_PRIVACY_URL },
  { label: 'Delete data', url: DELETE_DATA_URL },
]

export default function LegalLinks() {
  const { colors } = useTheme()

  return (
    <View style={styles.row}>
      {LINKS.map((item, index) => (
        <View key={item.url} style={styles.item}>
          {index > 0 ? <Text style={[styles.sep, { color: colors.textMuted }]}>·</Text> : null}
          <Pressable
            onPress={() => {
              Linking.openURL(item.url).catch(() => {})
            }}
            accessibilityRole="link"
            accessibilityLabel={item.label}
          >
            <Text style={[styles.link, { color: colors.textMuted }]}>{item.label}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: spacing.sm,
    paddingVertical: spacing.sm,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sep: {
    fontSize: 13,
  },
  link: {
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
})
