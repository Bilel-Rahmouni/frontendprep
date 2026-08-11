import { Link } from 'react-router-dom'
import ContentPage, { ContentSection } from '../components/ContentPage'

const REQUEST_MAILTO =
  'mailto:hello@mintstudio.io?subject=frontendprep%20data%20deletion%20request'

export default function DeleteDataPage() {
  return (
    <ContentPage
      title="Request data deletion"
      description="How to delete frontendprep data on web and mobile, and how to request deletion of any data we process."
      path="/delete-data"
      eyebrow="Privacy"
      lead="Use the steps below to remove on-device data, or email us to request deletion."
    >
      <ContentSection title="On-device data (immediate)">
        <p>
          Quiz progress, bookmarks, theme, and ads consent are stored only on your device. You can
          delete them without contacting us:
        </p>
        <ul>
          <li>
            <strong>Website:</strong> clear site data for frontendprep.site in your browser settings.
          </li>
          <li>
            <strong>Android app:</strong> Settings → Apps → frontendprep → Storage → Clear data, or
            uninstall the app.
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Advertising data">
        <p>
          Google AdMob (app) and AdSense (website, after consent) may process device and ad
          identifiers. Manage or reset them in{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . See <Link to="/ad-privacy">Advertising & privacy</Link> and the{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </ContentSection>

      <ContentSection title="Request deletion from us">
        <p>
          Email{' '}
          <a href={REQUEST_MAILTO}>hello@mintstudio.io</a> with subject “frontendprep data deletion
          request”. Include whether you used the website, the Android app, or both. We will confirm
          what we can delete on our side and point you to any remaining third-party steps.
        </p>
      </ContentSection>
    </ContentPage>
  )
}
