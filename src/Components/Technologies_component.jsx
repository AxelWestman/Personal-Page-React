import React from 'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import typescript_logo from '../assets/images/typescript.png';
import react_logo from '../assets/images/react.png';
import figma_logo from '../assets/images/figma.png';
import tailwind_logo from '../assets/images/tailwind.png';
import git_logo from '../assets/images/git.png';
import angular_logo from '../assets/images/Angular_full_color_logo.svg.png';
import mysql_logo from '../assets/images/mysql.png';
import nodejs_logo from '../assets/images/nodejs.png';
import express_logo from '../assets/images/express.png';
import { useLang } from '../i18n/LanguageContext';

const skills = [
  { name: 'HTML', src: html_photo, size: 'xs' },
  { name: 'CSS', src: css_photo, size: 'xs' },
  { name: 'JavaScript', src: javascript_logo, size: 'lg' },
  { name: 'TypeScript', src: typescript_logo, size: 'lg' },
  { name: 'React', src: react_logo, size: 'xl' },
  { name: 'Angular', src: angular_logo, size: 'xl' },
  { name: 'Tailwind', src: tailwind_logo, size: 'md' },
  { name: 'Node.js', src: nodejs_logo, size: 'md' },
  { name: 'Express', src: express_logo, size: 'sm' },
  { name: 'MySQL', src: mysql_logo, size: 'md' },
  { name: 'Git', src: git_logo, size: 'sm' },
  { name: 'Figma', src: figma_logo, size: 'xs' },
];

const sizeClasses = {
  xs: 'w-8 h-8',
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

const Technologies_component = () => {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-surface-gray border-y-2 border-ink">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-label text-[10px] tracking-[0.3em] text-ink-muted">03</span>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-vermilion">{t('skills.title')}</span>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-5 md:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className={`${sizeClasses[skill.size]} object-contain opacity-80 group-hover:opacity-100 transition-all duration-300`}
              />
              <span className="font-mono text-[10px] text-ink-muted group-hover:text-ink transition-colors opacity-0 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div id="proyectos" className="h-0" />
    </section>
  );
};

export default Technologies_component;
