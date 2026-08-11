import React from 'react';
import MePhoto from '../assets/images/foto-perfil.png';
import cv from '../assets/docs/Axel_Westman_CV.pdf';
import { useLang } from '../i18n/LanguageContext';

const Header_about_component = () => {
  const { t } = useLang();

  return (
    <>
      <section className="min-h-dvh flex flex-col justify-center pt-24 pb-16 overflow-hidden" id="hero">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <p className="font-display text-[8px] sm:text-[10px] tracking-[0.4em] text-cyan mb-8 blink">
            &gt; PRESS START_
          </p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-gold leading-relaxed tracking-wider mb-6 text-balance">
            AXEL<br />WESTMAN
          </h1>

          <p className="font-body text-2xl sm:text-3xl text-cyan mb-6">
            {t('hero.role')}
          </p>

          <p className="font-body text-lg text-text-dim max-w-md mx-auto mb-10">
            Lv.26  —  Santa Fe, Argentina
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="#experiencia" className="btn-retro">
              {t('hero.seeWork')}
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer" className="btn-retro">
              {t('about.cv')}
            </a>
            <a href="https://github.com/AxelWestman" target="_blank" rel="noopener noreferrer" className="btn-retro">
              github
            </a>
            <a href="https://linkedin.com/in/axel-westman-b4606a27b" target="_blank" rel="noopener noreferrer" className="btn-retro">
              linkedin
            </a>
          </div>

          <p className="font-display text-[8px] text-text-dim/40 mt-16 tracking-[0.3em]">
            &darr; SCROLL &darr;
          </p>
        </div>
      </section>

      <section className="py-24 overflow-hidden" id="about">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
            &gt; CHARACTER INFO_
          </p>

          <div className="p-4 sm:p-6 border-2 border-gold/60 bg-card/85 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <div className="w-full sm:w-48 shrink-0 pixel-border-sm p-1">
              <img
                src={MePhoto}
                alt="Axel Westman"
                className="w-full grayscale"
              />
            </div>

            <div>
              <h2 className="font-display text-[12px] sm:text-sm text-gold tracking-wider mb-2">
                {t('hero.role').toUpperCase()}
              </h2>
              <p className="font-body text-xl text-text-dim mb-4">
                {t('about.location')}
              </p>
              <div className="font-body text-lg text-text leading-relaxed space-y-3 max-w-lg">
                <p>{t('about.quote')}</p>
                <p className="text-text-dim">{t('about.university')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="experiencia" className="h-0" />
    </>
  );
};

export default Header_about_component;
