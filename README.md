# Celtikci Law Firm — Website

React + Vite ile oluşturulmuş tek sayfalık kurumsal avukatlık bürosu web sitesi.
Renk paleti ve logo, `celtikci_lav_firm_card.psd` kartvizit tasarımından alınmıştır.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Üretim derlemesi

```bash
npm run build
npm run preview
```

`dist/` klasörü, herhangi bir statik hosting (Netlify, Vercel, cPanel, vb.) üzerine
doğrudan yüklenebilir.

## Renk Paleti

| Renk | Kod | Kullanım |
|---|---|---|
| Kırmızı (ana) | `#A30000` | Logo, vurgular, butonlar |
| Koyu kırmızı | `#7A0000` | Hover durumları |
| Koyu (metin) | `#151819` | Başlıklar, hero arka planı |
| Gri | `#767676` | İkincil metinler |
| Beyaz | `#FFFFFF` | Ana zemin |

## Yapı

```
src/
  components/
    Header.jsx    — üst menü, logo, mobil menü
    Hero.jsx      — açılış bölümü
    About.jsx     — Av. Anıl Çeltikci hakkında
    Services.jsx  — hizmet/uzmanlık alanları
    WhyUs.jsx     — çalışma süreci
    Contact.jsx   — iletişim bilgileri + form
    Footer.jsx
  index.css       — renk değişkenleri ve genel stiller
  App.jsx
  main.jsx
```

## İçeriği Güncelleme

- İletişim bilgileri: `src/components/Contact.jsx` ve `src/components/Footer.jsx`
- Hizmetler listesi: `src/components/Services.jsx` içindeki `SERVICES` dizisi
- Renkler: `src/index.css` dosyasındaki `:root` değişkenleri
