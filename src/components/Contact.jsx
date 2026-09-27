import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Web sitesi iletişim formu — ${form.name || 'İsimsiz'}`)
    const body = encodeURIComponent(
      `Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\n\nMesaj:\n${form.message}`
    )
    window.location.href = `mailto:anil@celtikci.av.tr?subject=${subject}&body=${body}`
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--color-border)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    background: '#fff',
    color: 'var(--color-ink)',
    outline: 'none',
  }

  return (
    <section id="iletisim" className="section section-alt">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72 }} id="contact-grid">
        <div>
          <span className="eyebrow">İletişim</span>
          <h2>Görüşme Talep Edin</h2>
          <p style={{ color: 'var(--color-gray)', fontSize: 17, marginTop: 20 }}>
            Hukuki sorunuzu paylaşın, size en kısa sürede dönüş yapalım. İlk ön görüşme
            durumunuzu birlikte değerlendirmek içindir.
          </p>

          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 26 }}>
            {[
              ['E-posta', 'anil@celtikci.av.tr', 'mailto:anil@celtikci.av.tr'],
              ['Telefon', '+90 (542) 287 2270', 'tel:+905422872270'],
              ['Web', 'www.celtikci.av.tr', 'https://www.celtikci.av.tr'],
            ].map(([label, value, href]) => (
              <a key={label} href={href} style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                <span style={{ width: 42, height: 42, border: '1.5px solid var(--color-primary)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                  {label.charAt(0)}
                </span>
                <span>
                  <span style={{ display: 'block', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-gray)' }}>{label}</span>
                  <span style={{ display: 'block', fontSize: 16, fontWeight: 600, marginTop: 2 }}>{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid var(--color-border)', padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>Ad Soyad</label>
              <input style={inputStyle} name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>Telefon</label>
              <input style={inputStyle} name="phone" value={form.phone} onChange={handleChange} />
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>E-posta</label>
            <input style={inputStyle} type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div style={{ marginTop: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>Mesajınız</label>
            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={5} name="message" value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: 26, width: '100%', justifyContent: 'center' }}>
            Gönder
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact
