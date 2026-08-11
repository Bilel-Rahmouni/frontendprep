import { Link } from 'react-router-dom'
import ContentPage, { ContentSection } from '../components/ContentPage'

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      description="Privacy Policy for frontendprep — website and Android app: local progress, cookies, AdSense, and AdMob."
      path="/privacy"
      eyebrow="Legal"
      lead="Last updated: August 11, 2026"
    >
      <ContentSection title="Overview">
        <p>
          frontendprep (“we”, “us”) provides a free frontend quiz and study product at
          frontendprep.site and via the Android app (package{' '}
          <code>com.indigenoustech.frontendprep</code>). This Privacy Policy explains what
          information is processed when you use the website or the app. Quiz progress works without
          creating an account.
        </p>
      </ContentSection>

      <ContentSection title="Information stored on your device">
        <p>
          Quiz results, pass/fail progress, bookmarks, and (on the website) theme preference and ads
          consent are stored locally on your device — for example browser localStorage or app
          storage. That data stays on your device unless you clear site or app data. We do not
          require you to register or submit your name to practice.
        </p>
      </ContentSection>

      <ContentSection title="Information collected automatically">
        <p>
          Our hosting provider and security layers may process standard technical data such as IP
          address, browser or app type, device type, referring URL, and timestamps of requests. This
          information is used to operate, protect, and diagnose the service.
        </p>
      </ContentSection>

      <ContentSection id="ads" title="Advertising">
        <p>
          We use Google advertising to help keep frontendprep free. A short summary is also on our{' '}
          <Link to="/ad-privacy">Advertising & privacy</Link> page.
        </p>
        <p>
          <strong>Website — Google AdSense.</strong> Ads load only after you Accept in our cookie
          consent banner. If you choose Reject ads, we do not load the AdSense script. Your choice is
          stored in localStorage as <code>frontend-prep-consent</code>. Clearing site data resets the
          banner.
        </p>
        <p>
          <strong>Android app — Google AdMob.</strong> Banner ads may appear outside timed quizzes.
          The Google Mobile Ads SDK may process approximate location (for example from IP), app
          interactions, diagnostics, and device or advertising identifiers. That information is
          collected and shared with Google for advertising, analytics, and fraud prevention.
        </p>
        <p>
          When ads run, Google and its partners may use cookies, advertising IDs, or similar
          technologies. Learn more at{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites or apps that use our services
          </a>
          , manage personalization at{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          , or opt out where available via{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info/choices
          </a>
          .
        </p>
      </ContentSection>

      <ContentSection title="Cookies and similar technologies">
        <p>
          On the website we store theme, quiz progress, bookmarks, and your ads consent choice in
          your browser. When you accept ads, third-party advertising cookies may also be set. You can
          clear site data or reject ads to limit advertising cookies. Essential practice features do
          not require accepting ads on the website.
        </p>
      </ContentSection>

      <ContentSection title="Children">
        <p>
          The product is aimed at a general audience learning frontend development. It is not
          directed at children under 13, and we do not knowingly collect personal information from
          children under 13.
        </p>
      </ContentSection>

      <ContentSection title="External links">
        <p>
          Guides and pages may link to external documentation or sites. We are not responsible for
          the privacy practices of those third parties.
        </p>
      </ContentSection>

      <ContentSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          will change when we do. Continued use of the site or app after changes means you accept
          the updated policy.
        </p>
      </ContentSection>

      <ContentSection title="Data deletion">
        <p>
          You can clear on-device progress anytime, or request deletion from us. See{' '}
          <Link to="/delete-data">Request data deletion</Link>.
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
