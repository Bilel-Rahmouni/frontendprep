import { Link } from 'react-router-dom'
import BrandLogo from '../BrandLogo'
import { PARTS, LEVELS, QUIZZES_PER_LEVEL, QUESTIONS_PER_LEVEL } from '../../data/catalog'
import { useProgress } from '../../hooks/useProgress'

export default function TrackSelector({ getTrackProgress, onSelect }) {
  const { getGlobalProgress } = useProgress()
  const global = getGlobalProgress()

  return (
    <section className="hub-page" aria-labelledby="tracks-heading">
      <div className="hub-page__hero">
        <div className="hub-page__hero-copy">
          <BrandLogo className="hub-page__logo" alt="" />
          <p className="eyebrow">Practice</p>
          <h1 id="tracks-heading" className="display-title display-title--sm">
            Quiz tracks
          </h1>
          <p className="hub-page__lead">
            1,200 timed questions across HTML, CSS, React, and frontend.
            {global.passed > 0 && (
              <span className="hub-page__lead-stat"> · {global.passed}/{global.total} passed</span>
            )}
          </p>
        </div>
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
                '--i': i,
              }}
              onClick={() => onSelect(part.id)}
            >
              <span className="track-tile__top">
                <span className="track-tile__label">{part.label}</span>
                {prog && (
                  <span className="track-progress" aria-label={`${prog.passed} of ${total} quizzes passed`}>
                    {prog.passed}/{total}
                  </span>
                )}
              </span>
              <span className="track-tile__meta">
                {QUESTIONS_PER_LEVEL * LEVELS.length} questions · {LEVELS.length} levels
              </span>
              <span className="track-tile__cta" aria-hidden>
                Open →
              </span>
            </button>
          )
        })}
      </div>

      <div className="hub-overview hub-overview--tracks">
        <h2 className="hub-overview__heading">How it works</h2>
        <p className="hub-overview__text">
          Pick a track, then a difficulty. Each level has five 20-question quizzes (~4 min) and a mock exam.
          Progress stays in your browser. See the <Link to="/guides">guides</Link> and{' '}
          <Link to="/prep">preparation tips</Link> for study plans.
        </p>
      </div>
    </section>
  )
}
