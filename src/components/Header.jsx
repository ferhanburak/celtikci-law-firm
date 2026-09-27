import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function LanguageSwitch({ lang, setLang, style }) {
  return (
    <div
      className="lang-switch"
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--color-border)',
        borderRadius: 20,
        padding: 3,
        gap: 2,
        ...style,
      }}
    >
      {['tr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          style={{
            padding: '5px 12px',
            borderRadius: 16,
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: 0.5,
            color: lang === code ? '#fff' : 'var(--color-ink-soft)',
            background: lang === code ? 'var(--color-primary)' : 'transparent',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const NAV = [
    { to: '/', label: t.nav.home },
    { to: '/iletisim', label: t.nav.contact },
  ]

  return (
    <header
      style={{
        position: 'relative',
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid var(--color-border)',
        flexShrink: 0,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <Link to="/"><Logo size={34} /></Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop-group">
          <nav style={{ display: 'flex', gap: 36 }}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                style={({ isActive }) => ({
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 0.4,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <LanguageSwitch lang={lang} setLang={setLang} />

          <Link to="/iletisim" className="btn btn-primary" style={{ fontSize: 13, padding: '12px 26px' }}>
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="nav-burger"
          aria-label="Menü"
          onClick={() => setOpen((o) => !o)}
          style={{ display: 'none', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ width: 26, height: 2, background: 'var(--color-ink)' }} />
          <span style={{ width: 26, height: 2, background: 'var(--color-ink)' }} />
          <span style={{ width: 26, height: 2, background: 'var(--color-ink)' }} />
        </button>
      </div>

      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '10px 22px 24px' }}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  padding: '14px 0',
                  fontSize: 15,
                  fontWeight: 600,
                  borderBottom: '1px solid var(--color-border)',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
                })}
              >
                {item.label}
              </NavLink>
            ))}

            <LanguageSwitch lang={lang} setLang={setLang} style={{ marginTop: 18, alignSelf: 'flex-start' }} />

            <Link to="/iletisim" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 18, justifyContent: 'center' }}>
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop-group { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
