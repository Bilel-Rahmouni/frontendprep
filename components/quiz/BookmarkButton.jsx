import { useBookmarks } from '../../hooks/useBookmarks'

export default function BookmarkButton({ questionId, showLabel = false }) {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const saved = isBookmarked(questionId)

  return (
    <button
      type="button"
      className={`bookmark-btn ${saved ? 'bookmark-btn--saved' : ''}`}
      aria-pressed={saved}
      aria-label={saved ? 'Remove bookmark' : 'Save question'}
      onClick={() => toggleBookmark(questionId)}
    >
      <span className="bookmark-btn__icon" aria-hidden>
        {saved ? '★' : '☆'}
      </span>
      {showLabel && <span>{saved ? 'Saved' : 'Save'}</span>}
    </button>
  )
}
