import { useCallback, useEffect, useState } from 'react'
import {
  getAllTracksProgress,
  getGlobalProgress,
  getLevelProgress,
  getLevelProgressBundle,
  getQuizProgress,
  getTrackLevelsProgress,
  getTrackProgress,
  recordQuizResult,
} from '../lib/progress'

let listeners = new Set()
let versionCounter = 0

function bump() {
  versionCounter += 1
  listeners.forEach((cb) => cb(versionCounter))
}

export function useProgress() {
  const [version, setVersion] = useState(versionCounter)

  useEffect(() => {
    const cb = (v) => setVersion(v)
    listeners.add(cb)
    return () => listeners.delete(cb)
  }, [])

  const saveResult = useCallback(async (quizId, result) => {
    try {
      const entry = await recordQuizResult(quizId, result)
      bump()
      return entry
    } catch {
      return null
    }
  }, [])

  return {
    version,
    saveResult,
    getQuizProgress,
    getLevelProgress,
    getLevelProgressBundle,
    getTrackProgress,
    getTrackLevelsProgress,
    getAllTracksProgress,
    getGlobalProgress,
  }
}
