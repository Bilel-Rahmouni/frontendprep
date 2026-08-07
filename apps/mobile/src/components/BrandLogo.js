import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../theme'

const logo = require('../../assets/logo.png')

export default function BrandLogo({ size = 40, style }) {
  return (
    <View style={[styles.wrap, { width: size, height: size, borderRadius: size * 0.22 }, style]}>
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="cover"
        accessibilityLabel="frontendprep"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
})
