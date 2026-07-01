import { LEVELS } from '../../data/catalog'

export default function LevelSelector({ partLabel, partColor, partId, getLevelProgress, onSelect, onBack }) {
  return (
    <section className="hub-page">
      <button type="button" className="back-link" onClick={onBack}>
        ← All tracks
      </button>

      <div className="hub-page__hero hub-page__hero--compact">
        <span className="pill" style={{ '--pill-color': partColor }}>{partLabel}</span>
        <h1 className="display-title display-title--sm">Choose difficulty</h1>
      </div>

      <div className="level-stack">
        {LEVELS.map((level, i) => {
          const prog = getLevelProgress?.(partId, level.id)
          return (
            <button
              key={level.id}
              type="button"
              className="level-row"
              style={{ '--level-tone': level.tone, '--i': i }}
              onClick={() => onSelect(level.id)}
            >
              <div className="level-row__meter" aria-hidden>
                {Array.from({ length: 3 }, (_, j) => (
                  <span key={j} className={j < level.bars ? 'on' : ''} />
                ))}
              </div>
              <div className="level-row__body">
                <span className="level-row__label">{level.label}</span>
                <span className="level-row__desc">{level.description}</span>
              </div>
              <span className="level-row__meta">
                {prog ? `${prog.passed}/${prog.total} passed` : '5 × 20'}
              </span>
              <span className="level-row__arrow" aria-hidden>→</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
