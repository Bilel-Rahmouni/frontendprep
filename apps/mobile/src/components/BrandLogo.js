import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '../theme/ThemeContext'

const logoLight = require('../../assets/logo-on-white.png')
const logoDark = require('../../assets/logo-on-black.png')

export default function BrandLogo({ size = 40, style }) {
  const { isDark } = useTheme()

  return (
    <View style={[styles.wrap, { width: size, height: size, borderRadius: size * 0.22 }, style]}>
      <Image
        source={isDark ? logoDark : logoLight}
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
  },
  logo: {
    width: '100%',
    height: '100%',
  },
})
