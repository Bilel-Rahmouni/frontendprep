import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { PARTS } from '../data/catalog'
import { GUIDES } from '../data/guides'
import { PREP_TIPS } from '../data/preparationTips'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="frontendprep — Frontend exam simulator"
        description="Free frontend exam practice with 1,200 timed HTML, CSS, React, and Frontend quiz questions, mock exams, study guides, and preparation tips."
        path="/"
      />

      <section className="home-page">
        <div className="home-page__hero">
          <p className="eyebrow">Exam simulator</p>
          <h1 className="display-title">frontendprep</h1>
          <p className="home-page__lead">
            Timed HTML, CSS, React, and frontend practice — 1,200 questions, mock exams, and study guides.
          </p>
          <div className="home-page__actions">
            <Link to="/quiz" className="btn btn--primary">
              Start quizzes
            </Link>
            <Link to="/guides" className="btn btn--ghost">
              Guides
            </Link>
          </div>
        </div>

        <ul className="home-metrics" aria-label="Product stats">
          <li>
            <span className="home-metrics__value">1,200</span>
            <span className="home-metrics__label">Questions</span>
          </li>
          <li>
            <span className="home-metrics__value">4</span>
            <span className="home-metrics__label">Tracks</span>
          </li>
          <li>
            <span className="home-metrics__value">{GUIDES.length}</span>
            <span className="home-metrics__label">Guides</span>
          </li>
          <li>
            <span className="home-metrics__value">{PREP_TIPS.length}</span>
            <span className="home-metrics__label">Tips</span>
          </li>
        </ul>

        <section className="home-section" aria-labelledby="home-tracks-heading">
          <div className="home-section__head">
            <h2 id="home-tracks-heading" className="home-section__title">
              Tracks
            </h2>
          </div>
          <div className="home-tracks">
            {PARTS.map((part) => (
              <Link
                key={part.id}
                to={`/quiz/${part.id}`}
                className="home-track"
                style={{ '--track-color': part.color }}
              >
                <span className="home-track__label">{part.label}</span>
                <span className="home-track__meta">300 Q · 3 levels</span>
                <span className="home-track__arrow" aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section" aria-labelledby="home-how-heading">
          <div className="home-section__head">
            <h2 id="home-how-heading" className="home-section__title">
              How it works
            </h2>
          </div>
          <ol className="home-steps">
            <li>
              <strong>Choose a track and level.</strong> Beginner first until you clear ~80%.
            </li>
            <li>
              <strong>Run timed quizzes.</strong> 20 questions, 4 minutes.
            </li>
            <li>
              <strong>Review misses.</strong> Read explanations, bookmark weak items.
            </li>
            <li>
              <strong>Take a mock exam.</strong> Shuffle the full level when practice is stable.
            </li>
          </ol>
        </section>

        <section className="home-section" aria-labelledby="home-guides-heading">
          <div className="home-section__head">
            <h2 id="home-guides-heading" className="home-section__title">
              Guides
            </h2>
          </div>
          <ul className="home-guides">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link to={`/guides/${guide.slug}`} className="home-guides__link">
                  <span className="home-guides__cat">{guide.category}</span>
                  <span className="home-guides__title">{guide.title}</span>
                  <span className="home-guides__meta">{guide.readMinutes} min</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section home-section--close">
          <p className="home-close">
            Free · progress stays in your browser ·{' '}
            <Link to="/guides/frontend-interview-prep">2–4 week prep plan</Link>
          </p>
          <div className="home-page__actions">
            <Link to="/quiz" className="btn btn--primary">
              Open quizzes
            </Link>
            <Link to="/faq" className="btn btn--ghost">
              FAQ
            </Link>
          </div>
        </section>
      </section>
    </>
  )
}
