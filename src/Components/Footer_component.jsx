import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const Footer_component = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/30 border-t border-cream/10">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-6 font-mono text-[11px]">
          <a href="#" className="hover:text-cream/60 transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-cream/60 transition-colors">{t('footer.terms')}</a>
        </div>
        <p className="font-mono text-[11px]">
          &copy; {year} Axel Westman &mdash; {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer_component;
