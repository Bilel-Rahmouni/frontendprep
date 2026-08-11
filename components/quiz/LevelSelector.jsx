import { LEVELS } from '../../data/catalog'
import { getTrackOverview } from '../../data/trackOverviews'
import HubOverview from './HubOverview'

const GUIDE_BY_PART = {
  html: '/guides/html-interview-guide',
  css: '/guides/css-interview-guide',
  react: '/guides/react-interview-guide',
  frontend: '/guides/javascript-frontend-basics',
}

export default function LevelSelector({ partLabel, partColor, partId, getLevelProgress, onSelect, onBack }) {
  const overview = getTrackOverview(partId)
  const guidePath = GUIDE_BY_PART[partId]

  return (
    <section className="hub-page">
      <button type="button" className="back-link" onClick={onBack}>
        ← All tracks
      </button>

      <div className="hub-page__hero hub-page__hero--compact">
        <div className="hub-page__hero-copy">
          <span className="pill" style={{ '--pill-color': partColor }}>{partLabel}</span>
          <h1 className="display-title display-title--sm">{partLabel} practice</h1>
          <p className="hub-page__lead hub-page__lead--inline">
            Choose a difficulty. Each level has five timed quizzes and a mock exam.
            {guidePath ? (
              <>
                {' '}
                Read the <a href={guidePath}>{partLabel} guide</a> for topic context.
              </>
            ) : null}
          </p>
        </div>
      </div>

      {overview && (
        <HubOverview
          summary={overview.summary}
          covers={overview.covers}
          howToStudy={overview.howToStudy}
        />
      )}

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
