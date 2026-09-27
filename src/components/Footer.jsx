import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer style={{ background: 'var(--color-ink)', color: 'rgba(255,255,255,0.6)', padding: 'clamp(14px, 2.4vw, 20px) 0', flexShrink: 0 }}>
      <div
        className="container footer-row"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px 28px' }}
      >
        <Logo size={24} textVariant="white" />

        <nav style={{ display: 'flex', gap: 24, fontSize: 13.5, fontWeight: 500 }}>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/iletisim">{t.nav.contact}</Link>
        </nav>

        <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'rgba(255,255,255,0.55)', flexWrap: 'wrap' }}>
          <a href="mailto:anil@celtikci.av.tr">anil@celtikci.av.tr</a>
          <a href="tel:+905422872270">+90 (542) 287 2270</a>
        </div>

        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
          © {year} {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}

export default Footer
