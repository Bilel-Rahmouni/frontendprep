import { Link } from 'react-router-dom'
import ContentPage, { ContentCta, ContentSection } from '../components/ContentPage'
import { FAQ_ITEMS } from '../data/faq'

export default function FaqPage() {
  return (
    <ContentPage
      title="Frequently asked questions"
      description="FAQ about frontendprep: tracks, scoring, free access, ads, offline use, study plans, and privacy."
      path="/faq"
      eyebrow="Help"
      lead="Short answers about how the exam simulator works and how to study with it."
    >
      <div className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <ContentSection key={item.id} title={item.question}>
            <p>{item.answer}</p>
          </ContentSection>
        ))}
      </div>

      <ContentSection title="Still exploring?">
        <p>
          Browse <Link to="/guides">study guides</Link>, skim{' '}
          <Link to="/prep">preparation tips</Link>, or jump into{' '}
          <Link to="/quiz">quiz tracks</Link>. Legal details live in the{' '}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Use</Link>.
        </p>
      </ContentSection>

      <ContentCta to="/quiz" label="Start a quiz" />
    </ContentPage>
  )
}
