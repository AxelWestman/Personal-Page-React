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

const inventory = [
  { name: 'HTML', src: html_photo, rarity: 'common', size: 'sm' },
  { name: 'CSS', src: css_photo, rarity: 'common', size: 'sm' },
  { name: 'JavaScript', src: javascript_logo, rarity: 'rare', size: 'lg' },
  { name: 'TypeScript', src: typescript_logo, rarity: 'rare', size: 'lg' },
  { name: 'React', src: react_logo, rarity: 'epic', size: 'xl' },
  { name: 'Angular', src: angular_logo, rarity: 'epic', size: 'xl' },
  { name: 'Tailwind', src: tailwind_logo, rarity: 'uncommon', size: 'md' },
  { name: 'Node.js', src: nodejs_logo, rarity: 'rare', size: 'md' },
  { name: 'Express', src: express_logo, rarity: 'uncommon', size: 'md' },
  { name: 'MySQL', src: mysql_logo, rarity: 'rare', size: 'md' },
  { name: 'Git', src: git_logo, rarity: 'common', size: 'sm' },
  { name: 'Figma', src: figma_logo, rarity: 'uncommon', size: 'sm' },
];

const rarityColors = {
  common: 'border-text-dim/20 hover:border-text-dim/40',
  uncommon: 'border-green/30 hover:border-green/60',
  rare: 'border-cyan/30 hover:border-cyan/60',
  epic: 'border-magenta/30 hover:border-magenta/60',
};

const rarityLabels = {
  common: 'text-text-dim',
  uncommon: 'text-green',
  rare: 'text-cyan',
  epic: 'text-magenta',
};

const sizeMap = { sm: 'w-10 h-10', md: 'w-12 h-12', lg: 'w-14 h-14', xl: 'w-16 h-16' };

const Technologies_component = () => {
  const { t } = useLang();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
          &gt; INVENTORY_
        </p>

        <p className="font-display text-[10px] text-gold tracking-widest mb-10">
          [{t('skills.title').toUpperCase()}]
        </p>

        <div className="p-4 sm:p-6 border-2 border-gold/60 bg-card/85">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {inventory.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-2 p-3 border-2 ${rarityColors[item.rarity]} transition-all group cursor-default`}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className={`${sizeMap[item.size]} object-contain`}
                />
                <span className="font-display text-[6px] tracking-[0.15em] text-text-dim/60 group-hover:text-text-dim transition-colors text-center leading-relaxed">
                  {item.name.toUpperCase()}
                </span>
                <span className={`font-display text-[5px] tracking-[0.2em] ${rarityLabels[item.rarity]} opacity-60`}>
                  {item.rarity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="proyectos" className="h-0" />
    </section>
  );
};

export default Technologies_component;
