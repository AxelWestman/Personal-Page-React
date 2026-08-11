import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const Footer_component = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gold/20 py-8">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-display text-[7px] text-text-dim/40 tracking-[0.2em]">
          &copy; {year} AXEL WESTMAN
        </p>
        <div className="flex gap-4 font-display text-[6px] text-text-dim/30 tracking-[0.2em]">
          <a href="#" className="hover:text-text-dim transition-colors">{t('footer.privacy').toUpperCase()}</a>
          <a href="#" className="hover:text-text-dim transition-colors">{t('footer.terms').toUpperCase()}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer_component;
