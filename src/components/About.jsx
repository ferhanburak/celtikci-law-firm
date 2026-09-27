function About() {
  return (
    <section id="hakkimizda" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 72, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              aspectRatio: '4 / 5',
              background: 'var(--color-bg-alt)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <svg width="120" height="120" viewBox="0 0 100 100">
              <rect x="8" y="8" width="84" height="84" rx="2" fill="none" stroke="var(--color-primary)" strokeWidth="4" />
              <text x="50" y="67" fontFamily="'Playfair Display', Georgia, serif" fontSize="44" fontWeight="600" fill="var(--color-primary)" textAnchor="middle">C</text>
            </svg>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -24,
              right: -24,
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '22px 28px',
              maxWidth: 220,
            }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700 }}>10+ Yıl</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>Hukuk pratiği ve dava deneyimi</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Hakkımızda</span>
          <h2>Av. Anıl Çeltikci ile tanışın</h2>
          <p style={{ color: 'var(--color-gray)', fontSize: 17, marginTop: 22 }}>
            Celtikci Law Firm'in kurucu ortağı Av. Anıl Çeltikci, kariyeri boyunca bireysel
            müvekkillerden kurumsal şirketlere uzanan geniş bir yelpazede hukuki danışmanlık
            ve dava takibi hizmeti vermiştir. Her dosyayı titizlikle inceleyen, müvekkiliyle
            şeffaf iletişim kuran ve süreci baştan sona takip eden bir yaklaşım benimser.
          </p>
          <p style={{ color: 'var(--color-gray)', fontSize: 17, marginTop: 16 }}>
            Amacımız yalnızca dava kazanmak değil; müvekkillerimizin haklarını en doğru
            şekilde anlamalarını ve süreç boyunca kendilerini güvende hissetmelerini
            sağlamaktır.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 36 }}>
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
          #hakkimizda .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default About
