import { getRetrySuggestion } from '../../lib/weakAreas'

export default function WeakAreasPanel({ weakAreas, onRetry }) {
  if (!weakAreas?.areas?.length) return null

  const suggestion = getRetrySuggestion(weakAreas, weakAreas.partId, weakAreas.levelId)

  return (
    <section className="weak-areas" aria-labelledby="weak-areas-heading">
      <h2 id="weak-areas-heading" className="weak-areas__title">
        Weak spots
      </h2>
      <ul className="weak-areas__list">
        {weakAreas.areas.map((area) => {
          const pct = area.total > 0 ? Math.round((area.missed / area.total) * 100) : 0
          return (
            <li key={area.id} className="weak-areas__item">
              <span className="weak-areas__label">{area.label}</span>
              <span className="weak-areas__stat">
                {area.missed} missed · {pct}% wrong
              </span>
            </li>
          )
        })}
      </ul>
      {suggestion && (
        <p className="weak-areas__hint">{suggestion.message}</p>
      )}
      {onRetry && (
        <button type="button" className="btn btn--ghost btn--sm" onClick={onRetry}>
          Retry quiz
        </button>
      )}
    </section>
  )
}
