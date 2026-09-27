// Logo artık font ile değil, kartvizit PSD dosyasından çıkarılan gerçek
// görsellerle çiziliyor. Böylece "CELTIKCI LAW FIRM" yazısı ve "C" harfi
// her cihazda, hangi font kurulu olursa olsun, kartvizitteki ile birebir
// aynı görünür (Yu Mincho gibi kuruluma bağlı fontlarla ilgili sorun ortadan kalkar).
//
// Kare çerçeve tek renkli/geometrik bir şekil olduğu için (font sorunu yok)
// vektör (SVG) olarak çiziliyor — böylece her boyutta kusursuz keskin kalır.
// Kare rengi her zaman marka kırmızısı (#A80000). Yazı (wordmark) ve içindeki
// "C" görseli ise kartvizitten çıkarılıp bu renge boyanmış görsellerdir
// (bağlama göre kırmızı ya da beyaz varyant kullanılır).

const BRAND_RED = '#A80000'

function Logo({ size = 40, showText = true, textVariant = 'red' }) {
  const wordmarkSrc = textVariant === 'white' ? '/images/logo-wordmark-white.png' : '/images/logo-wordmark-red.png'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
          <rect x="8" y="8" width="84" height="84" rx="2" fill="none" stroke={BRAND_RED} strokeWidth="5" />
        </svg>
        <img
          src="/images/logo-c-red.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -52%)',
            height: '46%',
            width: 'auto',
          }}
        />
      </div>

      {showText && (
        <img
          src={wordmarkSrc}
          alt="Celtikci Law Firm"
          style={{ height: 34, width: 'auto', display: 'block' }}
        />
      )}
    </div>
  )
}

export default Logo
