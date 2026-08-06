import { Link } from 'react-router-dom'
import ContentPage, { ContentCta, ContentSection } from '../components/ContentPage'
import { PREP_TIPS } from '../data/preparationTips'
import { GUIDES } from '../data/guides'

export default function AboutPage() {
  return (
    <ContentPage
      title="About frontendprep"
      description="Learn what frontendprep is, who it is for, and how the free frontend exam simulator is built and maintained."
      path="/about"
      eyebrow="About"
      lead="A free exam-style practice tool for HTML, CSS, React, and general frontend knowledge — focused on timed recall, not flashy demos."
    >
      <ContentSection title="What we built">
        <p>
          frontendprep is an exam simulator for frontend developers and students. It includes 1,200
          multiple-choice questions across four tracks (HTML, CSS, React, Frontend), each with Beginner,
          Intermediate, and Advanced levels. Practice quizzes run on a short timer; mock exams shuffle a
          level’s bank for a stricter run.
        </p>
        <p>
          Alongside the quizzes you will find {PREP_TIPS.length} preparation tips and {GUIDES.length}{' '}
          long-form guides covering study plans, topic overviews, and timed-test strategy. Progress,
          scores, and bookmarks stay in your browser’s local storage — no account required.
        </p>
      </ContentSection>

      <ContentSection title="Who it is for">
        <p>
          The site is for anyone preparing for timed frontend knowledge checks: bootcamp exams,
          certification-style quizzes, interview screens, or self-driven refreshers before a job search.
          If your goal is building a portfolio product, pair this practice with real projects; if your goal
          is surviving a clocked MCQ, this format matches that pressure.
        </p>
      </ContentSection>

      <ContentSection title="How we think about quality">
        <p>
          Each question includes a concise explanation. Web platforms evolve, so treat official
          documentation (for example MDN and the React docs) as the source of truth when APIs change.
          We prioritize clear wording, realistic distractors, and useful review — not trick questions for
          their own sake.
        </p>
        <p>
          The product is made by{' '}
          <a href="https://mintstudio.io" target="_blank" rel="noopener noreferrer">
            mint.
          </a>{' '}
          Ads may appear to help fund hosting and continued content work. See the{' '}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Use</Link> for details.
        </p>
      </ContentSection>

      <ContentCta to="/quiz" label="Browse quiz tracks" />
    </ContentPage>
  )
}
