import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const logo = require('../../assets/logo-on-black.png')

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.center}>
        <View style={styles.logoWrap}>
          <Image source={logo} style={styles.logo} resizeMode="cover" accessibilityLabel="frontendprep" />
        </View>
        <Text style={styles.name}>frontendprep</Text>
      </View>
      <Text style={styles.credit}>
        mintstudio
        <Text style={styles.dot}>.</Text>
        io
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 28,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  logoWrap: {
    width: 88,
    height: 88,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  credit: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  dot: {
    color: 'hsl(152, 70%, 48%)',
    fontWeight: '800',
  },
})
