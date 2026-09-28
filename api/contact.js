// Celtikci Law Firm — İletişim formu e-posta uç noktası (Vercel Serverless Function)
//
// Üçüncü parti bir form servisine (Formspree, EmailJS vb.) bağımlı değildir,
// bu yüzden günlük/aylık gönderim kotasına takılmaz — kendi e-posta kutunuzun
// (anil@celtikci.av.tr) SMTP sunucusu üzerinden doğrudan gönderir.
//
// Gerekli ortam değişkenleri (Vercel → Project Settings → Environment Variables):
//   SMTP_HOST    — mail sunucunuzun adresi (ör. mail.celtikci.av.tr)
//   SMTP_PORT    — genelde 465 (SSL) ya da 587 (STARTTLS)
//   SMTP_SECURE  — 465 kullanıyorsan "true", 587 kullanıyorsan "false"
//   SMTP_USER    — genelde anil@celtikci.av.tr
//   SMTP_PASS    — o e-posta kutusunun şifresi
//   CONTACT_TO   — (opsiyonel) formun gideceği adres, boşsa anil@celtikci.av.tr kullanılır

import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Yalnızca POST istekleri kabul edilir.' })
    return
  }

  const body = req.body || {}
  const website = String(body.website || '').trim()

  // Basit bot tuzağı: gizli alan doluysa sessizce başarı dön, mail gönderme.
  if (website !== '') {
    res.status(200).json({ success: true })
    return
  }

  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const phone = String(body.phone || '').trim()
  const message = String(body.message || '').trim()

  if (!name || !EMAIL_RE.test(email) || !message) {
    res.status(422).json({ success: false, error: 'Eksik veya hatalı bilgi.' })
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Celtikci Law Firm Web Sitesi" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'anil@celtikci.av.tr',
      replyTo: `${name} <${email}>`,
      subject: `Web sitesi iletişim formu — ${name}`,
      text:
        `Web sitesi iletişim formundan yeni bir mesaj alındı:\n\n` +
        `Ad Soyad : ${name}\n` +
        `E-posta  : ${email}\n` +
        `Telefon  : ${phone || '-'}\n\n` +
        `Mesaj:\n${message}\n`,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('contact.js mail gönderim hatası:', err);
    res.status(500).json({
      success: false,
      error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan anil@celtikci.av.tr adresine yazın.',
    })
  }
}
