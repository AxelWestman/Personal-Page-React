import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const Contact_component = () => {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-ink text-cream" id="contacto">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-label text-[10px] tracking-[0.3em] text-cream/40">05</span>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-vermilion-light">{t('contact.title')}</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-cream max-w-xl leading-tight">
          {t('contact.heading')}<br />{t('contact.heading2')}
        </h2>

        <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div>
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-3">{t('contact.email')}</p>
            <a
              href="mailto:axelwestman@outlook.com"
              className="font-mono text-lg text-cream border-b border-cream/30 pb-0.5 hover:text-vermilion-light hover:border-vermilion-light transition-all"
            >
              axelwestman@outlook.com
            </a>
          </div>

          <div>
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-3">{t('contact.social')}</p>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <a href="https://linkedin.com/in/axel-westman-b4606a27b" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
                linkedin.com/in/axel-westman
              </a>
              <a href="https://github.com/AxelWestman" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
                github.com/AxelWestman
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_component;
