const SERVICES = [
  {
    title: 'Ticaret Hukuku',
    desc: 'Şirket kuruluşu, ortaklık sözleşmeleri, ticari uyuşmazlıklar ve şirketler hukuku danışmanlığı.',
  },
  {
    title: 'Aile Hukuku',
    desc: 'Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde hassas ve çözüm odaklı temsil.',
  },
  {
    title: 'Gayrimenkul Hukuku',
    desc: 'Tapu işlemleri, kira uyuşmazlıkları, kat mülkiyeti ve gayrimenkul alım-satım sözleşmeleri.',
  },
  {
    title: 'İş Hukuku',
    desc: 'İşe iade, kıdem-ihbar tazminatı, iş sözleşmeleri ve işveren-işçi uyuşmazlıklarının çözümü.',
  },
  {
    title: 'Ceza Hukuku',
    desc: 'Soruşturma ve kovuşturma aşamalarında savunma, şikayet ve itiraz süreçlerinin yürütülmesi.',
  },
  {
    title: 'Miras Hukuku',
    desc: 'Veraset işlemleri, mirasın paylaşımı, tenkis ve mirastan feragat süreçlerinde danışmanlık.',
  },
  {
    title: 'Sözleşmeler Hukuku',
    desc: 'Ticari ve bireysel sözleşmelerin hazırlanması, incelenmesi ve uyuşmazlıkların çözümü.',
  },
  {
    title: 'İcra ve İflas Hukuku',
    desc: 'Alacak takibi, icra takip süreçleri ve iflas erteleme başvurularında hukuki destek.',
  },
]

function Services() {
  return (
    <section id="hizmetler" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2>Uzmanlık Alanlarımız</h2>
          <p>Her dosyaya alanında derinlemesine bilgi ve kişiye özel bir strateji ile yaklaşıyoruz.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            background: 'var(--color-border)',
            border: '1px solid var(--color-border)',
          }}
          className="services-grid"
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: '#fff',
                padding: '38px 30px',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-bg-alt)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
            >
              <div style={{ width: 44, height: 44, border: '1.5px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18 }}>
                  {s.title.charAt(0)}
                </span>
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'var(--color-gray)', fontSize: 14.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Services
