import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { PARTS } from '../data/catalog'
import { GUIDES } from '../data/guides'
import { PREP_TIPS } from '../data/preparationTips'
import TrackIcon from '../components/icons/TrackIcon'

const HIGHLIGHTS = [
  {
    title: '1,200 timed questions',
    body: 'HTML, CSS, React, and mixed Frontend banks with explanations after every item — built for active recall, not passive scrolling.',
  },
  {
    title: 'Practice + mock exams',
    body: 'Short 20-question quizzes with a 4-minute timer, or stricter mock exams with shuffled questions from a full level bank.',
  },
  {
    title: 'Guides and study tips',
    body: `${GUIDES.length} long-form guides and ${PREP_TIPS.length} preparation tips covering study plans, topic depth, and test-day tactics.`,
  },
]

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
          <p className="eyebrow">Frontend exam simulator</p>
          <h1 className="display-title">
            frontendprep
            <span className="display-title__accent"> practice that matches the test</span>
          </h1>
          <p className="home-page__lead">
            Timed multiple-choice practice for HTML, CSS, React, and general frontend — with explanations,
            mock exams, and study guides so you build real recall under pressure.
          </p>
          <div className="home-page__actions">
            <Link to="/quiz" className="btn btn--primary">
              Start quizzes
            </Link>
            <Link to="/guides" className="btn btn--ghost">
              Read guides
            </Link>
          </div>
        </div>

        <ul className="home-highlights">
          {HIGHLIGHTS.map((item, i) => (
            <li key={item.title} className="home-highlights__item" style={{ '--i': i }}>
              <h2 className="home-highlights__title">{item.title}</h2>
              <p className="home-highlights__body">{item.body}</p>
            </li>
          ))}
        </ul>

        <section className="home-section" aria-labelledby="home-tracks-heading">
          <div className="home-section__head">
            <h2 id="home-tracks-heading" className="home-section__title">
              Four tracks, three levels each
            </h2>
            <p className="home-section__lead">
              Every track includes Beginner, Intermediate, and Advanced banks — 300 questions per track,
              split into five practice quizzes per level plus mock exam mode.
            </p>
          </div>
          <div className="home-tracks">
            {PARTS.map((part) => (
              <Link
                key={part.id}
                to={`/quiz/${part.id}`}
                className={`home-track home-track--${part.id}`}
                style={{ '--track-color': part.color, '--track-gradient': part.gradient }}
              >
                <span className="home-track__icon" aria-hidden>
                  <TrackIcon trackId={part.id} />
                </span>
                <span className="home-track__label">{part.label}</span>
                <span className="home-track__meta">300 questions · 3 levels</span>
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
              <strong>Pick a track and difficulty.</strong> Start Beginner if you are rebuilding foundations;
              move up when you consistently clear about 80%.
            </li>
            <li>
              <strong>Run timed quizzes.</strong> Twenty questions, four minutes — enough pressure to expose
              shaky recall without a marathon session.
            </li>
            <li>
              <strong>Review explanations and weak areas.</strong> Read every miss, bookmark stubborn items,
              then rotate topics so exams that mix HTML, CSS, and React feel familiar.
            </li>
            <li>
              <strong>Finish with mock exams and guides.</strong> Shuffle a full level bank when practice scores
              are stable, and use the guides for study plans and topic overviews.
            </li>
          </ol>
        </section>

        <section className="home-section" aria-labelledby="home-guides-heading">
          <div className="home-section__head">
            <h2 id="home-guides-heading" className="home-section__title">
              Study guides
            </h2>
            <p className="home-section__lead">
              Long-form articles for interview and exam prep — complementary to short Preparation tips.
            </p>
          </div>
          <ul className="home-guides">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link to={`/guides/${guide.slug}`} className="home-guides__link">
                  <span className="home-guides__cat">{guide.category}</span>
                  <span className="home-guides__title">{guide.title}</span>
                  <span className="home-guides__meta">{guide.readMinutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section home-section--close" aria-labelledby="home-why-heading">
          <h2 id="home-why-heading" className="home-section__title">
            Why timed practice matters
          </h2>
          <div className="home-prose">
            <p>
              Day-to-day coding with docs open builds a different skill than a knowledge screen with a clock.
              Timed multiple-choice practice trains retrieval: reading carefully, eliminating distractors, and
              applying rules for the box model, semantic HTML, React effects, and browser APIs without searching.
            </p>
            <p>
              frontendprep is free to use, works on desktop and mobile, and keeps progress in your browser.
              Start with a track below, or read the{' '}
              <Link to="/guides/frontend-interview-prep">frontend interview prep guide</Link> for a 2–4 week plan.
            </p>
          </div>
          <div className="home-page__actions">
            <Link to="/quiz" className="btn btn--primary">
              Open quiz tracks
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
