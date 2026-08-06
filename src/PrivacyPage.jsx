import { Link } from 'react-router-dom'
import ContentPage, { ContentSection } from '../components/ContentPage'

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      description="Privacy Policy for frontendprep.app — how local progress storage, cookies, and advertising partners work."
      path="/privacy"
      eyebrow="Legal"
      lead="Last updated: August 6, 2026"
    >
      <ContentSection title="Overview">
        <p>
          frontendprep (“we”, “us”) provides a free frontend quiz and study site at frontendprep.app.
          This Privacy Policy explains what information is processed when you use the site. We designed
          the core product so quiz progress can work without creating an account.
        </p>
      </ContentSection>

      <ContentSection title="Information stored in your browser">
        <p>
          Quiz results, pass/fail progress, bookmarks, and theme preference are stored locally in your
          browser (for example via localStorage). That data stays on your device unless you clear site
          data or use browser tools that remove it. We do not require you to register or submit your name
          to practice.
        </p>
      </ContentSection>

      <ContentSection title="Information collected automatically">
        <p>
          Like most websites, our hosting provider and security layers may process standard technical
          data such as IP address, browser type, device type, referring URL, and timestamps of requests.
          This information is used to operate, protect, and diagnose the service.
        </p>
      </ContentSection>

      <ContentSection title="Advertising">
        <p>
          We use Google AdSense to display advertisements. Google and its partners may use cookies or
          similar technologies to serve ads based on your prior visits to this site or other sites. You
          can learn how Google uses data at{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites or apps that use our services
          </a>
          , and manage ad personalization via{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          .
        </p>
        <p>
          Third-party vendors, including Google, may show ads based on cookies. You can opt out of
          personalized advertising by visiting{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info/choices
          </a>{' '}
          where available.
        </p>
      </ContentSection>

      <ContentSection title="Cookies and similar technologies">
        <p>
          Cookies may be set by us or by third parties (such as advertising partners) to remember
          preferences, measure traffic, or deliver ads. You can control cookies through your browser
          settings. Blocking some cookies may affect ad personalization or certain site features.
        </p>
      </ContentSection>

      <ContentSection title="Children">
        <p>
          The site is aimed at a general audience learning frontend development. It is not directed at
          children under 13, and we do not knowingly collect personal information from children under 13.
        </p>
      </ContentSection>

      <ContentSection title="External links">
        <p>
          Guides and pages may link to external documentation or sites. We are not responsible for the
          privacy practices of those third parties.
        </p>
      </ContentSection>

      <ContentSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top will
          change when we do. Continued use of the site after changes means you accept the updated policy.
        </p>
      </ContentSection>

      <ContentSection title="Contact">
        <p>
          Questions about this policy can be sent via the contact options published by{' '}
          <a href="https://mintstudio.io" target="_blank" rel="noopener noreferrer">
            mint.
          </a>{' '}
          Also see our <Link to="/terms">Terms of Use</Link> and <Link to="/about">About</Link> page.
        </p>
      </ContentSection>
    </ContentPage>
  )
}
