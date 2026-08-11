import { useCallback, useSyncExternalStore } from 'react'
import {
  getGlobalProgress,
  getLevelProgress,
  getQuizProgress,
  getTrackProgress,
  recordQuizResult,
} from '../lib/progress'

let progressVersion = 0

function subscribe(cb) {
  // progress-changed already bumps version in bump(); storage (other tabs) needs its own bump.
  const onStorage = () => {
    progressVersion += 1
    cb()
  }
  window.addEventListener('storage', onStorage)
  window.addEventListener('progress-changed', cb)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('progress-changed', cb)
  }
}

function getSnapshot() {
  return progressVersion
}

function bump() {
  progressVersion += 1
  window.dispatchEvent(new Event('progress-changed'))
}

export function useProgress() {
  useSyncExternalStore(subscribe, getSnapshot, () => 0)

  const saveResult = useCallback((quizId, result) => {
    const entry = recordQuizResult(quizId, result)
    bump()
    return entry
  }, [])

  return {
    saveResult,
    getQuizProgress,
    getLevelProgress,
    getTrackProgress,
    getGlobalProgress,
  }
}
