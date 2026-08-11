import AsyncStorage from '@react-native-async-storage/async-storage'

const PREFIX = 'frontend-prep-'
const queues = new Map()

function withLock(key, fn) {
  const prev = queues.get(key) || Promise.resolve()
  const next = prev.then(fn, fn)
  queues.set(
    key,
    next.then(
      () => undefined,
      () => undefined,
    ),
  )
  return next
}

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
    return true
  } catch {
    return false
  }
}

/**
 * Safe read-modify-write. Refuses to overwrite if existing JSON is corrupt.
 */
export async function updateJson(key, updater, fallback) {
  return withLock(key, async () => {
    let raw
    try {
      raw = await AsyncStorage.getItem(PREFIX + key)
    } catch {
      throw new Error(`Storage read failed: ${key}`)
    }

    let current = fallback
    if (raw) {
      try {
        current = JSON.parse(raw)
      } catch {
        // Refuse to clobber corrupt data with a fresh object
        throw new Error(`Corrupt storage for ${key}`)
      }
    }

    const next = await updater(current)
    const ok = await writeJson(key, next)
    if (!ok) throw new Error(`Storage write failed: ${key}`)
    return next
  })
}
