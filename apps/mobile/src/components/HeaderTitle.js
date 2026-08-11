import { StyleSheet, Text, View } from 'react-native'
import BrandLogo from './BrandLogo'
import { useTheme } from '../theme/ThemeContext'

export default function HeaderTitle({ title = 'frontendprep', showLogo = true }) {
  const { colors } = useTheme()

  return (
    <View style={styles.row}>
      {showLogo ? <BrandLogo size={28} /> : null}
      <Text style={[styles.title, { color: colors.textH }]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
})
