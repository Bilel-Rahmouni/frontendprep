import { readJson, updateJson } from './storage'

const KEY = 'bookmarks'

function normalize(ids) {
  return Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : []
}

export async function getBookmarks() {
  return normalize(await readJson(KEY, []))
}

export async function isBookmarked(questionId) {
  const ids = await getBookmarks()
  return ids.includes(questionId)
}

export async function toggleBookmark(questionId) {
  const ids = await updateJson(
    KEY,
    (current) => {
      const list = normalize(current)
      const idx = list.indexOf(questionId)
      if (idx >= 0) list.splice(idx, 1)
      else list.push(questionId)
      return list
    },
    [],
  )
  return ids.includes(questionId)
}

export async function removeBookmark(questionId) {
  await updateJson(
    KEY,
    (current) => normalize(current).filter((id) => id !== questionId),
    [],
  )
}
