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
    { title: 'App Administración', desc: t('projects.project1_desc'), techs: [html_photo, css_photo, typescript_logo, angular_logo, express_logo, mysql_logo], link: 'http://104.236.85.47:8081', accent: 'vermilion' },
    { title: 'E-commerce', desc: t('projects.project2_desc'), techs: [html_photo, css_photo, typescript_logo, angular_logo, express_logo, mysql_logo], link: 'http://104.236.85.47/home', accent: 'electric' },
    { title: 'SpaceX Launches', desc: t('projects.project3_desc'), techs: [html_photo, tailwind_logo, javascript_logo, react_logo], link: 'https://axelwestman.github.io/spacex-missions/', accent: 'vermilion' },
    { title: 'Acme Rockets', desc: t('projects.project4_desc'), techs: [html_photo, tailwind_logo, javascript_logo], link: 'https://acme-rockets-7p76.onrender.com/', accent: 'solar' },
    { title: 'BuildCon', desc: t('projects.project5_desc'), techs: [html_photo, bootstrap_logo], link: 'https://axelwestman.github.io/Responsive-Landing-Page-With-Bootstrap/', accent: 'electric' },
    { title: 'FOODIE', desc: t('projects.project6_desc'), techs: [html_photo, css_photo, javascript_logo, react_logo], link: 'https://axelwestman.github.io/landing-page-react/build/', accent: 'vermilion' },
  ];

  const accentColors = {
    vermilion: 'border-l-vermilion',
    electric: 'border-l-electric',
    solar: 'border-l-solar',
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-label text-[10px] tracking-[0.3em] text-ink-muted">04</span>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-vermilion">{t('projects.title')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-6 border-2 border-transparent border-l-3 ${accentColors[project.accent]} bg-surface-gray hover:bg-cream hover:border-ink transition-all duration-200`}
            >
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink group-hover:text-vermilion transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-ink-muted mt-3 leading-relaxed max-w-md">
                {project.desc}
              </p>
              <div className="flex items-center gap-1.5 mt-4">
                {project.techs.map((tech, idx) => (
                  <img key={idx} src={tech} alt="" className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                ))}
              </div>
              <span className="font-mono text-[10px] text-ink-muted/50 mt-3 inline-block group-hover:text-ink-muted transition-colors">
                {project.link.replace(/^https?:\/\//, '').split('/')[0]} &rarr;
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/AxelWestman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm text-ink border-2 border-ink px-5 py-2.5 hover:bg-ink hover:text-cream transition-all duration-200"
          >
            github.com/AxelWestman &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects_component;
