import { useCallback, useSyncExternalStore } from 'react'
import { getBookmarks, toggleBookmark as toggle } from '../lib/bookmarks'

let snapshotKey = ''

function refreshSnapshot() {
  snapshotKey = getBookmarks().join('\0')
}

function subscribe(cb) {
  const handler = () => {
    refreshSnapshot()
    cb()
  }
  window.addEventListener('storage', handler)
  window.addEventListener('bookmarks-changed', handler)
  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener('bookmarks-changed', handler)
  }
}

function getSnapshot() {
  return snapshotKey
}

refreshSnapshot()

export function useBookmarks() {
  const key = useSyncExternalStore(subscribe, getSnapshot, () => '')
  const bookmarkIds = key ? key.split('\0') : []

  const toggleBookmark = useCallback((questionId) => {
    toggle(questionId)
    refreshSnapshot()
    window.dispatchEvent(new Event('bookmarks-changed'))
  }, [])

  return {
    bookmarkIds,
    toggleBookmark,
    isBookmarked: (id) => bookmarkIds.includes(id),
  }
}
