function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(40px, 7vw, 72px) 0 clamp(32px, 5vw, 56px)' }}>
      {/* içerik, alttaki bölümlerle aynı sol kenara hizalanır (container'ın kendisi ortalanmaz) */}
      <div className="container">
        <div style={{ maxWidth: 640 }}>
          {eyebrow && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, background: 'var(--color-primary)', display: 'inline-block' }} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 2.5,
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                }}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(28px, 3.8vw, 44px)', lineHeight: 1.18 }}>{title}</h1>
          {subtitle && (
            <p style={{ color: 'var(--color-gray)', fontSize: 16.5, marginTop: 16, maxWidth: 480 }}>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
