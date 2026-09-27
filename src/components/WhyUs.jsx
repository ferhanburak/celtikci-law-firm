const STEPS = [
  {
    n: '01',
    title: 'Ön Görüşme',
    desc: 'Durumunuzu dinliyor, hukuki açıdan olası seçenekleri birlikte değerlendiriyoruz.',
  },
  {
    n: '02',
    title: 'Strateji Belirleme',
    desc: 'Dosyanıza özel bir hukuki strateji hazırlayıp süreci ve olası senaryoları netleştiriyoruz.',
  },
  {
    n: '03',
    title: 'Süreç Takibi',
    desc: 'Dava veya işlem sürecini titizlikle yürütüp her aşamada sizi düzenli olarak bilgilendiriyoruz.',
  },
  {
    n: '04',
    title: 'Sonuç ve Destek',
    desc: 'Süreç sonunda sonucu birlikte değerlendirir, gerekirse sonraki adımlarda destek sunmaya devam ederiz.',
  },
]

function WhyUs() {
  return (
    <section id="neden-biz" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Neden Biz</span>
          <h2>Çalışma Şeklimiz</h2>
          <p>Şeffaf, planlı ve müvekkil odaklı bir süreç yönetimi sunuyoruz.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }} className="steps-grid">
          {STEPS.map((step, i) => (
            <div key={step.n} style={{ position: 'relative', paddingTop: 8 }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 46,
                  fontWeight: 700,
                  color: 'var(--color-primary-light)',
                  marginBottom: 4,
                }}
              >
                {step.n}
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: 'var(--color-gray)', fontSize: 14.5 }}>{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="step-divider" style={{ position: 'absolute', top: 26, right: -20, width: 1, height: 40, background: 'var(--color-border)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          .step-divider { display: none !important; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default WhyUs
