import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

function Home() {
  return (
    <section className="hero-fill" style={{ position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Logo, fotoğraftan bağımsız, sayfanın arka planında ayrı bir tasarım öğesi olarak */}
      <div
        aria-hidden="true"
        className="home-logo-deco"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-70px',
          transform: 'translateY(-50%)',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Logo size={360} showText={false} />
      </div>

      <div
        className="container about-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: 'clamp(28px, 5vw, 64px)',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: 340, width: '100%', margin: '0 auto' }}>
          <div
            style={{
              aspectRatio: '4 / 5',
              background: 'var(--color-bg-alt)',
              border: '2px solid var(--color-primary)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/anil-celtikci.jpg"
              alt="Av. Anıl Çeltikci"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">Av. Anıl Çeltikci · Founding Partner</span>
          <h1 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.2 }}>Av. Anıl Çeltikci ile tanışın</h1>

          <p style={{ color: 'var(--color-gray)', fontSize: 16, marginTop: 16, lineHeight: 1.6 }}>
            Celtikci Law Firm'in kurucu ortağı Av. Anıl Çeltikci, kariyeri boyunca bireysel
            müvekkillerden kurumsal şirketlere uzanan geniş bir yelpazede hukuki danışmanlık
            ve dava takibi hizmeti vermiştir. Her dosyayı titizlikle inceleyen, müvekkiliyle
            şeffaf iletişim kuran ve süreci baştan sona takip eden bir yaklaşım benimser.
          </p>
          <p style={{ color: 'var(--color-gray)', fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
            Amacımız yalnızca dava kazanmak değil; müvekkillerimizin haklarını en doğru
            şekilde anlamalarını ve süreç boyunca kendilerini güvende hissetmelerini
            sağlamaktır.
          </p>

          <div className="about-checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
            {[
              'Kişiye özel hukuki strateji',
              'Şeffaf süreç ve ücretlendirme',
              'Hızlı geri dönüş garantisi',
              'Gizlilik ve güven esaslı ilişki',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: 18, lineHeight: '20px' }}>✓</span>
                <span style={{ fontSize: 15, color: 'var(--color-ink-soft)' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <Link to="/iletisim" className="btn btn-primary">Ücretsiz Ön Görüşme</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-checklist { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .home-logo-deco { display: none; }
        }
      `}</style>
    </section>
  )
}

export default Home
