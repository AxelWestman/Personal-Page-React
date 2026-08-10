import React from 'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import typescript_logo from '../assets/images/typescript.png';
import angular_logo from '../assets/images/Angular_full_color_logo.svg.png';
import react_logo from '../assets/images/react.png';
import nodejs_logo from '../assets/images/nodejs.png';
import mysql_logo from '../assets/images/mysql.png';
import { useLang } from '../i18n/LanguageContext';

const Work_component = () => {
  const { t } = useLang();

  const entries = [
    {
      year: t('experience.entry1_year'),
      title: 'Required App',
      subtitle: 'Front-end Developer',
      description: t('experience.entry1_desc'),
      link: 'https://rqapp.com.ar/',
      techs: [html_photo, css_photo, javascript_logo, typescript_logo, angular_logo],
      color: 'border-l-vermilion',
    },
    {
      year: t('experience.entry2_year'),
      title: 'Crombie',
      subtitle: 'Full Stack Developer',
      description: t('experience.entry2_desc'),
      link: '#',
      techs: [react_logo, typescript_logo, nodejs_logo, mysql_logo],
      color: 'border-l-electric',
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-label text-[10px] tracking-[0.3em] text-ink-muted">02</span>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-vermilion">{t('experience.title')}</span>
        </div>

        <div className="relative pl-8 lg:pl-12 border-l-2 border-ink/10">
          {entries.map((entry, i) => (
            <div key={i} className={`mb-16 last:mb-0 pl-6 border-l-3 ${entry.color} -ml-px`}>
              <span className="font-mono text-xs text-ink-muted tracking-widest">
                {entry.year}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2">
                {entry.title}
              </h3>
              <p className="font-mono text-xs text-ink-muted/60 mt-0.5">
                {entry.subtitle}
              </p>
              <p className="font-mono text-sm text-ink-light mt-3 max-w-xl leading-relaxed">
                {entry.description}
              </p>
              <div className="flex items-center gap-2 mt-4">
                {entry.techs.map((tech, idx) => (
                  <img key={idx} src={tech} alt="" className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                ))}
              </div>
              {entry.link !== '#' && (
                <a href={entry.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-mono text-xs text-ink-muted border-b border-ink-muted/30 hover:text-ink hover:border-ink transition-all">
                  {entry.link.replace('https://', '')}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-muted mt-10 italic">
          {t('experience.footer')}
        </p>
      </div>
      <div id="habilidades" className="h-0" />
    </section>
  );
};

export default Work_component;
