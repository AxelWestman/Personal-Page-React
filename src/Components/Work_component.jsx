import React from 'react';
import techIcons, { renderTechIcon } from '../techIcons';
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
      techs: [techIcons.react, techIcons.typescript, techIcons.nodejs, techIcons.mysql],
    },
    {
      year: t('experience.entry1_year'),
      title: 'Required App',
      subtitle: 'Front-end Developer',
      description: t('experience.entry1_desc'),
      link: 'https://rqapp.com.ar/',
      techs: [techIcons.html, techIcons.css, techIcons.javascript, techIcons.typescript, techIcons.angular],
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
                {/*<p className="font-body text-lg text-text mt-3 leading-relaxed max-w-xl">
                    {entry.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {entry.techs.map((icon, idx) => (
                      <React.Fragment key={idx}>{renderTechIcon(icon, 'text-[24px] opacity-70 hover:opacity-100 transition-opacity')}</React.Fragment>
                    ))}
                  </div>*/}
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
