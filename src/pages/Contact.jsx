import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Not: şimdilik mail istemcisi üzerinden gönderiliyor.
    // İleride buraya gerçek bir e-posta gönderim entegrasyonu (ör. bir form servisi
    // veya kendi backend'imiz) eklenecek.
    const subject = encodeURIComponent(`Web sitesi iletişim formu — ${form.name || 'İsimsiz'}`)
    const body = encodeURIComponent(
      `Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\n\nMesaj:\n${form.message}`
    )
    window.location.href = `mailto:anil@celtikci.av.tr?subject=${subject}&body=${body}`
  }

  return (
    <section className="page-fill section" style={{ display: 'flex', alignItems: 'center' }}>
      <div
        className="container contact-grid"
        style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center', width: '100%' }}
      >
        {/* SOL: başlık + iletişim bilgileri — formla eş hizada, tek sütun */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, background: 'var(--color-primary)', display: 'inline-block' }} />
            <span className="eyebrow" style={{ margin: 0 }}>İletişim</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.15 }}>Görüşme Talep Edin</h1>
          <p style={{ color: 'var(--color-gray)', fontSize: 16, marginTop: 14, lineHeight: 1.6 }}>
            Hukuki sorunuzu paylaşın, size en kısa sürede dönüş yapalım. İlk ön görüşme
            durumunuzu birlikte değerlendirmek içindir.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
            {[
              ['E-posta', 'anil@celtikci.av.tr', 'mailto:anil@celtikci.av.tr'],
              ['Telefon', '+90 (542) 287 2270', 'tel:+905422872270'],
              ['Web', 'www.celtikci.av.tr', 'https://www.celtikci.av.tr'],
            ].map(([label, value, href]) => (
              <a key={label} href={href} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ width: 38, height: 38, borderRadius: 10, border: '1.5px solid var(--color-primary)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                  {label.charAt(0)}
                </span>
                <span>
                  <span style={{ display: 'block', fontSize: 11.5, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-gray)' }}>{label}</span>
                  <span style={{ display: 'block', fontSize: 15.5, fontWeight: 600, marginTop: 1 }}>{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* SAĞ: form — sol sütunla eş yapıda, aynı hizada başlar */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          style={{
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 20,
            padding: 'clamp(24px, 3.5vw, 36px)',
            boxShadow: '0 20px 50px -20px rgba(21,24,25,0.10)',
          }}
        >
          <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label className="field-label" htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                className="field-input"
                name="name"
                placeholder="Adınız Soyadınız"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="field-label" htmlFor="phone">
                Telefon <span className="field-optional">(opsiyonel)</span>
              </label>
              <input
                id="phone"
                className="field-input"
                name="phone"
                placeholder="+90 5xx xxx xx xx"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <label className="field-label" htmlFor="email">E-posta</label>
            <input
              id="email"
              className="field-input"
              type="email"
              name="email"
              placeholder="ornek@eposta.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginTop: 14 }}>
            <label className="field-label" htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              className="field-input"
              style={{ resize: 'vertical' }}
              rows={3}
              name="message"
              placeholder="Hukuki talebinizi kısaca özetleyin..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: 16, width: '100%', justifyContent: 'center', borderRadius: 10 }}
          >
            Gönder
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact
