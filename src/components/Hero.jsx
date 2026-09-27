import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      className="hero-fill"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--color-ink)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', width: '100%', paddingTop: 32, paddingBottom: 32 }}>
        {/* dekoratif kare çerçeve — yazının altından geçip sayfanın sağ kenarının dışına taşar (kırpılır) */}
        <div
          aria-hidden="true"
          className="hero-deco"
          style={{
            position: 'absolute',
            left: '32%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '68vw',
            height: '68vw',
            maxWidth: 780,
            maxHeight: 780,
            border: '2px solid rgba(163,0,0,0.35)',
            borderRadius: 4,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="hero-deco"
          style={{
            position: 'absolute',
            left: '46%',
            top: '30%',
            width: '36vw',
            height: '36vw',
            maxWidth: 420,
            maxHeight: 420,
            border: '2px solid rgba(255,255,255,0.08)',
            borderRadius: 4,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: '#D98C8C' }}>Av. Anıl Çeltikci · Founding Partner</span>
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(32px, 4.6vw, 60px)',
              lineHeight: 1.15,
              maxWidth: 720,
            }}
          >
            Haklarınızı korumak için<br />
            <span style={{ color: 'var(--color-primary)' }}>güvenilir</span> ve <span style={{ color: 'var(--color-primary)' }}>kararlı</span> hukuki temsil.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, maxWidth: 530, marginTop: 22 }}>
            Celtikci Law Firm; bireysel ve kurumsal müvekkillerine özenli, şeffaf ve
            sonuç odaklı hukuki danışmanlık sunar.
          </p>

          <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-primary">Ücretsiz Ön Görüşme</Link>
            <Link to="/hakkimizda" className="btn btn-outline-light">Hakkımızda</Link>
          </div>

          <div style={{ display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap' }}>
            {[
              ['10+', 'Yıllık Deneyim'],
              ['300+', 'Sonuçlanan Dosya'],
              ['%95', 'Müvekkil Memnuniyeti'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: '#fff', fontWeight: 700 }}>{num}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-deco { display: none; }
        }
      `}</style>
    </section>
  )
}

export default Hero
