import AsyncStorage from '@react-native-async-storage/async-storage'

const PREFIX = 'frontend-prep-'

export async function readJson(key, fallback) {
  try {
    const raw = await AsyncStorage.getItem(PREFIX + key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export async function writeJson(key, value) {
  try {
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    /* quota / disk — ignore */
  }
}
