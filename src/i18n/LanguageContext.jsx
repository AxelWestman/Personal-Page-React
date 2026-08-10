import { createContext, useContext, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  const t = (path) => {
    const keys = path.split('.');
    let val = translations[lang];
    for (const k of keys) {
      if (val?.[k] === undefined) return path;
      val = val[k];
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
