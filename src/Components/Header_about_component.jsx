import React from 'react';
import MePhoto from '../assets/images/foto-perfil.png';
import cv from '../assets/docs/Axel_Westman_CV.pdf';
import { useLang } from '../i18n/LanguageContext';

const Header_about_component = () => {
  const { t } = useLang();

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 border-t-3 border-ink" id="hero">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-vermilion mb-6">
              {t('hero.role')}
            </p>
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink leading-[0.9] tracking-tight text-balance">
              Axel<br />Westman
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#experiencia" className="font-mono text-sm text-ink border-b-2 border-vermilion pb-1 hover:text-vermilion transition-colors">
                {t('hero.seeWork')}
              </a>
              <a href="#contacto" className="font-mono text-sm text-ink-muted border-b-2 border-transparent pb-1 hover:text-ink hover:border-ink transition-all">
                {t('hero.contact')}
              </a>
              <a href="https://github.com/AxelWestman" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-ink-muted border-b-2 border-transparent pb-1 hover:text-ink hover:border-ink transition-all">
                github
              </a>
              <a href="https://linkedin.com/in/axel-westman-b4606a27b" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-ink-muted border-b-2 border-transparent pb-1 hover:text-ink hover:border-ink transition-all">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-surface-gray" id="about">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-2/5 shrink-0">
              <div className="border-3 border-ink p-2">
                <img
                  src={MePhoto}
                  alt="Axel Westman"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="font-label text-[10px] tracking-[0.3em] uppercase text-ink-muted mt-3">
                {t('about.location')}
              </p>
            </div>

            <div className="w-full lg:w-3/5">
              <span className="font-label text-xs tracking-[0.3em] uppercase text-vermilion">
                {t('about.title')}
              </span>
              <p className="font-display font-bold italic text-2xl sm:text-3xl text-ink mt-4 leading-snug text-balance">
                {t('about.quote')}
              </p>
              <p className="font-mono text-sm text-ink-muted mt-1">
                {t('about.university')}
              </p>

              <div className="mt-8 space-y-4 font-mono text-[15px] leading-relaxed text-ink-light max-w-prose">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 font-mono text-sm text-ink border-2 border-ink px-5 py-2.5 hover:bg-ink hover:text-cream transition-all duration-200"
                id="experiencia_mobile"
              >
                {t('about.cv')} &darr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="experiencia" className="h-0" />
    </>
  );
};

export default Header_about_component;
