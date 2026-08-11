import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const Contact_component = () => {
  const { t } = useLang();

  return (
    <section className="py-24 overflow-hidden" id="contacto">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
          &gt; MESSAGE_
        </p>

        <div className="p-4 sm:p-6 border-2 border-gold/60 bg-card/85 text-center max-w-xl mx-auto">
          <h2 className="font-display text-[12px] sm:text-sm text-gold tracking-wider mb-6">
            [{t('contact.title').toUpperCase()}]
          </h2>

          <p className="font-body text-2xl text-text mb-8 leading-relaxed">
            {t('contact.heading')}<br />{t('contact.heading2')}
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:axelwestman@outlook.com"
              className="block font-display text-[9px] sm:text-[10px] text-cyan hover:text-yellow tracking-wider transition-colors"
            >
              &gt; axelwestman@outlook.com
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/in/axel-westman-b4606a27b" target="_blank" rel="noopener noreferrer" className="btn-retro text-[8px]">
              LINKEDIN
            </a>
            <a href="https://github.com/AxelWestman" target="_blank" rel="noopener noreferrer" className="btn-retro text-[8px]">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_component;
