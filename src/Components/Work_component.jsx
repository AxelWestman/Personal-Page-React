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
      year: t('experience.entry2_year'),
      title: 'Crombie',
      subtitle: 'Full Stack Developer',
      description: t('experience.entry2_desc'),
      link: 'https://crombie.dev/',
      techs: [react_logo, typescript_logo, nodejs_logo, mysql_logo],
    },
    {
      year: t('experience.entry1_year'),
      title: 'Required App',
      subtitle: 'Front-end Developer',
      description: t('experience.entry1_desc'),
      link: 'https://rqapp.com.ar/',
      techs: [html_photo, css_photo, javascript_logo, typescript_logo, angular_logo],
    },
  ];

  const questColors = {
    gold: 'before:bg-gold',
    cyan: 'before:bg-cyan',
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
          &gt; QUEST LOG_
        </p>

        <p className="font-display text-[10px] text-gold tracking-widest mb-12">
          [{t('experience.title').toUpperCase()}]
        </p>

        <div className="space-y-8">
          {entries.map((entry, i) => (
            <div key={i} className="p-4 sm:p-6 border-2 border-gold/60 bg-card/85">
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <span className="font-display text-[7px] sm:text-[8px] tracking-wider text-gold shrink-0 mt-1">
                  [{entry.year}]
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[10px] sm:text-xs text-gold tracking-wider">
                    {entry.title}
                  </h3>
                  <p className="font-body text-lg text-text-dim mt-1">
                    {entry.subtitle}
                  </p>
                  <p className="font-body text-lg text-text mt-3 leading-relaxed max-w-xl">
                    {entry.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {entry.techs.map((tech, idx) => (
                      <img key={idx} src={tech} alt="" className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    ))}
                  </div>
                  {entry.link !== '#' && (
                    <a href={entry.link} target="_blank" rel="noopener noreferrer" className="font-display text-[7px] tracking-wider text-text-dim/40 hover:text-cyan transition-colors mt-3 inline-block">
                      [{entry.link.replace('https://', '')}]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="habilidades" className="h-0" />
    </section>
  );
};

export default Work_component;
