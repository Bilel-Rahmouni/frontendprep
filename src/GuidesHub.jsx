import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage'
import { GUIDES } from '../data/guides'

export default function GuidesHub() {
  return (
    <ContentPage
      title="Study guides"
      description="Long-form frontend interview and exam guides covering HTML, CSS, React, JavaScript, and timed MCQ strategy."
      path="/guides"
      eyebrow="Learn"
      lead="In-depth articles to pair with timed quizzes — study plans, topic overviews, and test strategy."
      wide
    >
      <ul className="guides-index">
        {GUIDES.map((guide, i) => (
          <li key={guide.slug} className="guides-index__item" style={{ '--i': i }}>
            <Link to={`/guides/${guide.slug}`} className="guides-index__link">
              <span className="guides-index__cat">{guide.category}</span>
              <h2 className="guides-index__title">{guide.title}</h2>
              <p className="guides-index__desc">{guide.description}</p>
              <span className="guides-index__meta">{guide.readMinutes} min read</span>
            </Link>
          </li>
        ))}
      </ul>
    </ContentPage>
  )
}
