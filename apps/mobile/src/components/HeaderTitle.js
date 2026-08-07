import { StyleSheet, Text, View } from 'react-native'
import BrandLogo from './BrandLogo'
import { colors } from '../theme'

export default function HeaderTitle({ title = 'frontendprep', showLogo = true }) {
  return (
    <View style={styles.row}>
      {showLogo ? <BrandLogo size={28} /> : null}
      <Text style={styles.title} numberOfLines={1}>
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
    color: colors.textH,
    letterSpacing: -0.3,
  },
})
