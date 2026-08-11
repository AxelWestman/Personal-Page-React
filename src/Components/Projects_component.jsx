import React from 'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import typescript_logo from '../assets/images/typescript.png';
import react_logo from '../assets/images/react.png';
import tailwind_logo from '../assets/images/tailwind.png';
import bootstrap_logo from '../assets/images/bootstrap.png';
import angular_logo from '../assets/images/Angular_full_color_logo.svg.png';
import express_logo from '../assets/images/express.png';
import mysql_logo from '../assets/images/mysql.png';
import { useLang } from '../i18n/LanguageContext';

const Projects_component = () => {
  const { t } = useLang();

  const projects = [
    { title: 'App Administración', desc: t('projects.project1_desc'), techs: [html_photo, css_photo, typescript_logo, angular_logo, express_logo, mysql_logo], link: 'http://104.236.85.47:8081', rarity: 'epic' },
    { title: 'E-commerce', desc: t('projects.project2_desc'), techs: [html_photo, css_photo, typescript_logo, angular_logo, express_logo, mysql_logo], link: 'http://104.236.85.47/home', rarity: 'epic' },
    { title: 'SpaceX Launches', desc: t('projects.project3_desc'), techs: [html_photo, tailwind_logo, javascript_logo, react_logo], link: 'https://axelwestman.github.io/spacex-missions/', rarity: 'rare' },
    { title: 'Acme Rockets', desc: t('projects.project4_desc'), techs: [html_photo, tailwind_logo, javascript_logo], link: 'https://acme-rockets-7p76.onrender.com/', rarity: 'uncommon' },
    { title: 'BuildCon', desc: t('projects.project5_desc'), techs: [html_photo, bootstrap_logo], link: 'https://axelwestman.github.io/Responsive-Landing-Page-With-Bootstrap/', rarity: 'common' },
    { title: 'FOODIE', desc: t('projects.project6_desc'), techs: [html_photo, css_photo, javascript_logo, react_logo], link: 'https://axelwestman.github.io/landing-page-react/build/', rarity: 'uncommon' },
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
                {project.techs.map((tech, idx) => (
                  <img key={idx} src={tech} alt="" className="w-5 h-5 object-contain opacity-50 group-hover:opacity-80 transition-opacity" />
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
