import { PARTS, LEVELS, QUIZZES_PER_LEVEL } from '../../data/catalog'
import TrackIcon from '../icons/TrackIcon'
import { useProgress } from '../../hooks/useProgress'

const STATS = [
  { value: '1.2k', label: 'Questions' },
  { value: '4', label: 'Tracks' },
  { value: '4 min', label: 'Per quiz' },
]

function TrackProgressRing({ passed, total }) {
  const pct = total > 0 ? Math.round((passed / total) * 100) : 0
  return (
    <span className="track-progress" style={{ '--pct': pct }} aria-label={`${passed} of ${total} quizzes passed`}>
      <span className="track-progress__label">{passed}/{total}</span>
    </span>
  )
}

export default function TrackSelector({ getTrackProgress, onSelect }) {
  const { getGlobalProgress } = useProgress()
  const global = getGlobalProgress()

  return (
    <section className="hub-page" aria-labelledby="tracks-heading">
      <div className="hub-page__hero">
        <div className="hub-page__hero-copy">
          <p className="eyebrow">Exam simulator</p>
          <h1 id="tracks-heading" className="display-title">
            Master the
            <span className="display-title__accent"> frontend test</span>
          </h1>
          <p className="hub-page__lead">
            1,200 timed questions across HTML, CSS, React &amp; frontend — practice quizzes or mock exams.
            {global.passed > 0 && (
              <span className="hub-page__lead-stat"> · {global.passed}/{global.total} passed</span>
            )}
          </p>
        </div>
        <ul className="stat-strip">
          {STATS.map((s) => (
            <li key={s.label} className="stat-strip__item">
              <span className="stat-strip__value">{s.value}</span>
              <span className="stat-strip__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="tracks-bento">
        {PARTS.map((part, i) => {
          const prog = getTrackProgress?.(part.id)
          const total = LEVELS.length * QUIZZES_PER_LEVEL

          return (
            <button
              key={part.id}
              type="button"
              className={`track-tile track-tile--${part.id}`}
              style={{
                '--track-color': part.color,
                '--track-gradient': part.gradient,
                '--i': i,
              }}
              onClick={() => onSelect(part.id)}
            >
              <span className="track-tile__bg" aria-hidden />
              {prog && <TrackProgressRing passed={prog.passed} total={total} />}
              <span className="track-tile__symbol">
                <TrackIcon trackId={part.id} />
              </span>
              <span className="track-tile__label">{part.label}</span>
              <span className="track-tile__meta">100 questions · 5 quizzes</span>
              <span className="track-tile__cta" aria-hidden>
                Start →
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
