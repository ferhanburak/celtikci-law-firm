function About() {
  return (
    <section className="section" style={{ paddingTop: 'clamp(24px, 5vw, 48px)' }}>
      <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(28px, 5vw, 64px)', alignItems: 'flex-start' }}>
        <div style={{ position: 'relative', maxWidth: 340, margin: '0 auto' }}>
          <div
            style={{
              aspectRatio: '4 / 5',
              background: 'var(--color-bg-alt)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/anil-celtikci.jpg"
              alt="Av. Anıl Çeltikci"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            className="about-badge"
            style={{
              position: 'absolute',
              bottom: -20,
              right: -16,
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '20px 24px',
              maxWidth: 200,
            }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700 }}>10+ Yıl</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>Hukuk pratiği ve dava deneyimi</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Hakkımızda</span>
          <h1 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.2 }}>Av. Anıl Çeltikci ile tanışın</h1>

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
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-checklist { grid-template-columns: 1fr !important; }
          .about-badge { max-width: 170px !important; padding: 16px 18px !important; }
        }
      `}</style>
    </section>
  )
}

export default About
