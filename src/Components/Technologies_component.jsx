import React from 'react';
import techIcons, { renderTechIcon } from '../techIcons';
import { useLang } from '../i18n/LanguageContext';

const inventory = [
  { name: 'HTML', className: techIcons.html, rarity: 'common', size: 'sm' },
  { name: 'CSS', className: techIcons.css, rarity: 'common', size: 'sm' },
  { name: 'JavaScript', className: techIcons.javascript, rarity: 'rare', size: 'lg' },
  { name: 'TypeScript', className: techIcons.typescript, rarity: 'rare', size: 'lg' },
  { name: 'React', className: techIcons.react, rarity: 'epic', size: 'xl' },
  { name: 'Angular', className: techIcons.angular, rarity: 'epic', size: 'xl' },
  { name: 'Tailwind', className: techIcons.tailwind, rarity: 'uncommon', size: 'md' },
  { name: 'Node.js', className: techIcons.nodejs, rarity: 'rare', size: 'md' },
  { name: 'Express', className: techIcons.express, rarity: 'uncommon', size: 'md' },
  { name: 'MySQL', className: techIcons.mysql, rarity: 'rare', size: 'md' },
  { name: 'Git', className: techIcons.git, rarity: 'common', size: 'sm' },
  { name: 'Figma', className: techIcons.figma, rarity: 'uncommon', size: 'sm' },
  { name: 'PostgreSQL', className: techIcons.postgres, rarity: 'rare', size: 'md' },
  { name: 'Next.js', className: techIcons.next, rarity: 'epic', size: 'xl' },
  { name: 'NestJS', className: techIcons.nest, rarity: 'rare', size: 'md' },
  { name: 'Strapi', className: techIcons.strapi, rarity: 'uncommon', size: 'md' },
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

const sizeMap = { sm: 'text-[40px]', md: 'text-[48px]', lg: 'text-[56px]', xl: 'text-[64px]' };

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
                {renderTechIcon(item.className, sizeMap[item.size])}
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
      <div id="perks" className="h-0" />
    </section>
  );
};

export default Technologies_component;
