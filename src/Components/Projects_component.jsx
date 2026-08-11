import React from 'react';
import techIcons, { renderTechIcon } from '../techIcons';
import { useLang } from '../i18n/LanguageContext';

const Projects_component = () => {
  const { t } = useLang();

  const projects = [
    { title: 'App Administración', desc: t('projects.project1_desc'), techs: [techIcons.html, techIcons.css, techIcons.typescript, techIcons.angular, techIcons.express, techIcons.mysql], link: 'http://104.236.85.47:8081', rarity: 'epic' },
    { title: 'E-commerce', desc: t('projects.project2_desc'), techs: [techIcons.html, techIcons.css, techIcons.typescript, techIcons.angular, techIcons.express, techIcons.mysql], link: 'http://104.236.85.47/home', rarity: 'epic' },
    { title: 'SpaceX Launches', desc: t('projects.project3_desc'), techs: [techIcons.html, techIcons.tailwind, techIcons.javascript, techIcons.react], link: 'https://axelwestman.github.io/spacex-missions/', rarity: 'rare' },
    { title: 'Acme Rockets', desc: t('projects.project4_desc'), techs: [techIcons.html, techIcons.tailwind, techIcons.javascript], link: 'https://acme-rockets-7p76.onrender.com/', rarity: 'uncommon' },
    { title: 'BuildCon', desc: t('projects.project5_desc'), techs: [techIcons.html, techIcons.bootstrap], link: 'https://axelwestman.github.io/Responsive-Landing-Page-With-Bootstrap/', rarity: 'common' },
    { title: 'FOODIE', desc: t('projects.project6_desc'), techs: [techIcons.html, techIcons.css, techIcons.javascript, techIcons.react], link: 'https://axelwestman.github.io/landing-page-react/build/', rarity: 'uncommon' },
  ];

  const rarityStyles = {
    epic: 'border-magenta/40 hover:border-magenta shadow-[0_0_12px_rgba(255,95,162,0.1)]',
    rare: 'border-cyan/40 hover:border-cyan shadow-[0_0_12px_rgba(0,240,255,0.1)]',
    uncommon: 'border-green/30 hover:border-green',
    common: 'border-gold/30 hover:border-gold/70',
  };

  const rarityLabels = {
    epic: '★ ★ ★',
    rare: '★ ★',
    uncommon: '★',
    common: '',
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
          &gt; ITEMS_
        </p>

        <p className="font-display text-[10px] text-gold tracking-widest mb-10">
          [{t('projects.title').toUpperCase()}]
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 sm:p-5 border-2 ${rarityStyles[project.rarity]} bg-card/85 transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-[9px] sm:text-[10px] text-gold tracking-wider group-hover:text-yellow transition-colors">
                  {project.title}
                </h3>
                {rarityLabels[project.rarity] && (
                  <span className="font-display text-[7px] text-magenta/60 tracking-wider shrink-0 ml-2">
                    {rarityLabels[project.rarity]}
                  </span>
                )}
              </div>
              <p className="font-body text-lg text-text-dim leading-relaxed mb-4">
                {project.desc}
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                {project.techs.map((icon, idx) => (
                  <React.Fragment key={idx}>{renderTechIcon(icon, 'text-[20px] opacity-50 group-hover:opacity-80 transition-opacity')}</React.Fragment>
                ))}
              </div>
              <span className="font-display text-[6px] tracking-[0.2em] text-text-dim/30 group-hover:text-cyan/60 transition-colors">
                [{project.link.replace(/^https?:\/\//, '').split('/')[0]}]
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/AxelWestman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro"
          >
            github.com/AxelWestman
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects_component;
