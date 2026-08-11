import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import { useTheme } from '../theme/ThemeContext'

export default function ThemeSwitch() {
  const { theme, setTheme, colors } = useTheme()
  const isDark = theme === 'dark'

  return (
    <View
      style={[styles.wrap, { backgroundColor: colors.surface2, borderColor: colors.border }]}
      accessibilityRole="tablist"
    >
      <Pressable
        onPress={() => setTheme('light')}
        style={[styles.btn, !isDark && { backgroundColor: colors.surface }]}
        accessibilityRole="button"
        accessibilityLabel="Light mode"
        accessibilityState={{ selected: !isDark }}
        hitSlop={4}
      >
        <Ionicons
          name={!isDark ? 'sunny' : 'sunny-outline'}
          size={16}
          color={!isDark ? colors.textH : colors.textMuted}
        />
      </Pressable>
      <Pressable
        onPress={() => setTheme('dark')}
        style={[styles.btn, isDark && { backgroundColor: colors.surface }]}
        accessibilityRole="button"
        accessibilityLabel="Dark mode"
        accessibilityState={{ selected: isDark }}
        hitSlop={4}
      >
        <Ionicons
          name={isDark ? 'moon' : 'moon-outline'}
          size={15}
          color={isDark ? colors.textH : colors.textMuted}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 999,
    padding: 3,
    gap: 2,
  },
  btn: {
    width: 30,
    height: 28,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
