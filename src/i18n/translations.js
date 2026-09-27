// Celtikci Law Firm — TR / EN metin sözlüğü.
// Varsayılan dil Türkçe'dir (bkz. LanguageContext.jsx).

export const translations = {
  tr: {
    nav: {
      home: 'Anasayfa',
      contact: 'İletişim',
      cta: 'Randevu Al',
    },
    footer: {
      rights: 'Celtikci Law Firm',
    },
    home: {
      eyebrow: 'Av. Anıl Çeltikci · Kurucu Ortak',
      title: 'Av. Anıl Çeltikci ile tanışın',
      paragraph1:
        "Celtikci Law Firm'in kurucu ortağı Av. Anıl Çeltikci, kariyeri boyunca bireysel " +
        'müvekkillerden kurumsal şirketlere uzanan geniş bir yelpazede hukuki danışmanlık ' +
        've dava takibi hizmeti vermiştir. Her dosyayı titizlikle inceleyen, müvekkiliyle ' +
        'şeffaf iletişim kuran ve süreci baştan sona takip eden bir yaklaşım benimser.',
      paragraph2:
        'Amacımız yalnızca dava kazanmak değil; müvekkillerimizin haklarını en doğru ' +
        'şekilde anlamalarını ve süreç boyunca kendilerini güvende hissetmelerini ' +
        'sağlamaktır.',
      checklist: [
        'Kişiye özel hukuki strateji',
        'Şeffaf süreç ve ücretlendirme',
        'Hızlı geri dönüş garantisi',
        'Gizlilik ve güven esaslı ilişki',
      ],
      cta: 'Ücretsiz Ön Görüşme',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Görüşme Talep Edin',
      subtitle:
        'Hukuki sorunuzu paylaşın, size en kısa sürede dönüş yapalım. İlk ön görüşme ' +
        'durumunuzu birlikte değerlendirmek içindir.',
      infoLabels: { email: 'E-posta', phone: 'Telefon', web: 'Web' },
      form: {
        name: 'Ad Soyad',
        namePlaceholder: 'Adınız Soyadınız',
        phone: 'Telefon',
        optional: '(opsiyonel)',
        phonePlaceholder: '+90 5xx xxx xx xx',
        email: 'E-posta',
        emailPlaceholder: 'ornek@eposta.com',
        message: 'Mesajınız',
        messagePlaceholder: 'Hukuki talebinizi kısaca özetleyin...',
        submit: 'Gönder',
        submitting: 'Gönderiliyor...',
        success: 'Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.',
        errorGeneric: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.',
        errorConnection:
          'Bağlantı hatası. Lütfen tekrar deneyin veya doğrudan anil@celtikci.av.tr adresine yazın.',
      },
    },
  },

  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
      cta: 'Book a Consultation',
    },
    footer: {
      rights: 'Celtikci Law Firm',
    },
    home: {
      eyebrow: 'Anıl Çeltikci, Esq. · Founding Partner',
      title: 'Meet Anıl Çeltikci, Esq.',
      paragraph1:
        'Anıl Çeltikci, founding partner of Celtikci Law Firm, has provided legal counsel ' +
        'and litigation support throughout his career to a wide range of clients, from ' +
        'individuals to corporations. He takes a meticulous approach to every case, ' +
        'communicates transparently with clients, and follows each matter through from ' +
        'start to finish.',
      paragraph2:
        'Our goal is not only to win cases, but to ensure our clients truly understand ' +
        'their rights and feel secure throughout the entire process.',
      checklist: [
        'Tailored legal strategy',
        'Transparent process and pricing',
        'Fast response guarantee',
        'Confidentiality and trust-based relationship',
      ],
      cta: 'Free Initial Consultation',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Request a Consultation',
      subtitle:
        'Share your legal question and we will get back to you as soon as possible. ' +
        'This is meant to help us assess your initial consultation together.',
      infoLabels: { email: 'Email', phone: 'Phone', web: 'Website' },
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your Full Name',
        phone: 'Phone',
        optional: '(optional)',
        phonePlaceholder: '+90 5xx xxx xx xx',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        message: 'Your Message',
        messagePlaceholder: 'Briefly summarize your legal request...',
        submit: 'Send',
        submitting: 'Sending...',
        success: "Your message has been sent. We'll get back to you shortly.",
        errorGeneric: 'Message could not be sent. Please try again.',
        errorConnection:
          'Connection error. Please try again, or email us directly at anil@celtikci.av.tr.',
      },
    },
  },
}
