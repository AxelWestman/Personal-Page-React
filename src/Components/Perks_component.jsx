import React from 'react';
import techIcons, { renderTechIcon } from '../techIcons';
import { useLang } from '../i18n/LanguageContext';

const perks = [
  { label: '[AI]', name: 'ai', className: null },
  { label: '[A11Y]', name: 'a11y', className: null },
  { label: '[SCRUM]', name: 'scrum', className: null },
  { label: null, name: 'docker', className: techIcons.docker },
  { label: '[SEO]', name: 'seo', className: null },
  { label: '[TEAM+]', name: 'soft', className: null },
];

const Perks_component = () => {
  const { t } = useLang();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <p className="font-display text-[8px] tracking-[0.3em] text-cyan mb-8">
          &gt; PERKS_
        </p>

        <p className="font-display text-[10px] text-gold tracking-widest mb-10">
          [{t('perks.title').toUpperCase()}]
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="p-4 border-2 border-gold/30 hover:border-gold/60 bg-card/85 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                {perk.className
                  ? renderTechIcon(perk.className, 'text-[28px]')
                  : (
                    <span className="font-display text-[9px] tracking-[0.2em] text-magenta/70 group-hover:text-magenta transition-colors">
                      {perk.label}
                    </span>
                  )}
                <h3 className="font-display text-[9px] sm:text-[10px] text-gold tracking-wider">
                  {t(`perks.${perk.name}_label`)}
                </h3>
              </div>
              <p className="font-body text-lg text-text-dim leading-relaxed">
                {t(`perks.${perk.name}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div id="proyectos" className="h-0" />
    </section>
  );
};

export default Perks_component;
