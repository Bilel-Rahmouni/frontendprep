import { useCallback, useEffect, useState } from 'react'
import { getBookmarks, toggleBookmark as toggle } from '../lib/bookmarks'

let listeners = new Set()

function bump() {
  listeners.forEach((cb) => cb())
}

export function useBookmarks() {
  const [bookmarkIds, setBookmarkIds] = useState([])

  const refresh = useCallback(async () => {
    const ids = await getBookmarks()
    setBookmarkIds(ids)
  }, [])

  useEffect(() => {
    refresh()
    const cb = () => {
      refresh()
    }
    listeners.add(cb)
    return () => listeners.delete(cb)
  }, [refresh])

  const toggleBookmark = useCallback(
    async (questionId) => {
      await toggle(questionId)
      bump()
      await refresh()
    },
    [refresh],
  )

  return {
    bookmarkIds,
    toggleBookmark,
    isBookmarked: (id) => bookmarkIds.includes(id),
  }
}
