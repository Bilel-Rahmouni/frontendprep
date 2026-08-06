import { Link } from 'react-router-dom'
import ContentPage, { ContentSection } from '../components/ContentPage'

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Use"
      description="Terms of Use for frontendprep.app — acceptable use, content disclaimer, and liability limits."
      path="/terms"
      eyebrow="Legal"
      lead="Last updated: August 6, 2026"
    >
      <ContentSection title="Agreement">
        <p>
          By accessing frontendprep.app you agree to these Terms of Use. If you do not agree, do not use
          the site. The service is provided by mint. for personal learning and exam practice.
        </p>
      </ContentSection>

      <ContentSection title="The service">
        <p>
          frontendprep offers frontend quiz questions, mock exams, preparation tips, and study guides.
          Features may change, and availability is not guaranteed. Progress stored in your browser can be
          lost if you clear site data or switch devices.
        </p>
      </ContentSection>

      <ContentSection title="Acceptable use">
        <p>
          You may use the site for personal, non-destructive learning. You agree not to attempt to disrupt
          the service, scrape the site in a way that degrades performance, bypass security controls, or use
          the content to build a competing dataset through systematic bulk extraction that harms the
          service. Automated access that respects robots.txt for indexing is fine; abusive traffic is not.
        </p>
      </ContentSection>

      <ContentSection title="Intellectual property">
        <p>
          Site design, question wording, explanations, tips, and guides are protected by applicable
          intellectual property laws. You may practice on the site and quote short excerpts for personal
          study. You may not republish the question banks or guides as your own product without permission.
        </p>
      </ContentSection>

      <ContentSection title="Educational disclaimer">
        <p>
          Content is for educational practice. Web standards and libraries change. We do not guarantee that
          every item is complete, exam-board official, or sufficient for any particular certification or
          job. Always verify critical details against official documentation.
        </p>
      </ContentSection>

      <ContentSection title="Advertising">
        <p>
          The site may display third-party advertisements. Ad partners are responsible for their own creative
          and tracking technologies subject to their policies and our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </ContentSection>

      <ContentSection title="Disclaimer of warranties">
        <p>
          The site is provided “as is” and “as available” without warranties of any kind, express or
          implied, including fitness for a particular purpose and non-infringement, to the fullest extent
          permitted by law.
        </p>
      </ContentSection>

      <ContentSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, mint. and its contributors are not liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of data, scores,
          or opportunity arising from your use of the site.
        </p>
      </ContentSection>

      <ContentSection title="Changes">
        <p>
          We may update these terms by posting a new version on this page. The “Last updated” date will
          change accordingly. Continued use after changes constitutes acceptance.
        </p>
      </ContentSection>

      <ContentSection title="Contact">
        <p>
          For questions about these terms, contact mint. via{' '}
          <a href="https://mintstudio.io" target="_blank" rel="noopener noreferrer">
            mintstudio.io
          </a>
          .
        </p>
      </ContentSection>
    </ContentPage>
  )
}
