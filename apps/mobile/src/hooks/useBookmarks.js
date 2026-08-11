import { useCallback, useEffect, useRef, useState } from 'react'
import { getBookmarks, toggleBookmark as toggle } from '../lib/bookmarks'

let listeners = new Set()

function bump() {
  listeners.forEach((cb) => cb())
}

export function useBookmarks() {
  const [bookmarkIds, setBookmarkIds] = useState([])
  const [ready, setReady] = useState(false)
  const seqRef = useRef(0)

  const refresh = useCallback(async () => {
    const seq = ++seqRef.current
    try {
      const ids = await getBookmarks()
      if (seq !== seqRef.current) return
      setBookmarkIds(ids)
    } catch {
      /* keep previous list */
    } finally {
      if (seq === seqRef.current) setReady(true)
    }
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
      try {
        const nowOn = await toggle(questionId)
        setBookmarkIds((prev) => {
          const has = prev.includes(questionId)
          if (nowOn && !has) return [...prev, questionId]
          if (!nowOn && has) return prev.filter((id) => id !== questionId)
          return prev
        })
        bump()
      } catch {
        await refresh()
      }
    },
    [refresh],
  )

  return {
    bookmarkIds,
    ready,
    toggleBookmark,
    isBookmarked: (id) => bookmarkIds.includes(id),
  }
}
