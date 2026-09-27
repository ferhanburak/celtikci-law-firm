import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'celtikci-lang'
const DEFAULT_LANG = 'tr'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'en' || saved === 'tr' ? saved : DEFAULT_LANG
    } catch {
      return DEFAULT_LANG
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage kapalı/kullanılamıyor olabilir — sessizce geç
    }
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage, LanguageProvider içinde kullanılmalıdır')
  }
  return ctx
}
