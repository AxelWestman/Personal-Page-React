import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import Header_about_component from './Components/Header_about_component';
import Work_component from './Components/Work_component';
import Technologies_component from './Components/Technologies_component';
import Perks_component from './Components/Perks_component';
import Projects_component from './Components/Projects_component';
import Contact_component from './Components/Contact_component';
import Footer_component from './Components/Footer_component';

const sections = [
  { id: 'hero', label: 'START' },
  { id: 'experiencia', label: 'QUEST LOG' },
  { id: 'habilidades', label: 'INVENTORY' },
  { id: 'perks', label: 'PERKS' },
  { id: 'proyectos', label: 'ITEMS' },
  { id: 'contacto', label: 'MAIL' },
];

function Sidebar() {
  const { t, lang, toggleLang } = useLang();

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
        >
          <span className="font-display text-[8px] tracking-[0.2em] text-text-dim group-hover:text-gold transition-colors">
            {s.label}
          </span>
          <span className="text-gold/0 group-hover:text-gold/70 transition-all blink font-display text-[10px]">&gt;</span>
        </a>
      ))}

      <div className="w-16 h-px bg-gold/20 mt-3 mb-1" />

      <button
        onClick={toggleLang}
        className="font-display text-[8px] tracking-[0.2em] text-gold/40 hover:text-gold transition-colors cursor-pointer py-1"
        aria-label="Toggle language"
      >
        [{lang === 'es' ? 'EN' : 'ES'}]
      </button>
    </aside>
  );
}

function MobileMenu() {
  const { t, lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 lg:hidden font-display text-[10px] tracking-[0.2em] text-gold border-2 border-gold/60 px-3 py-2 bg-bg cursor-pointer"
        aria-label="Menu"
      >
        [{open ? 'X' : 'MENU'}]
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-6 lg:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => handleNav(s.id)}
              className="font-display text-sm tracking-[0.3em] text-text-dim hover:text-gold transition-colors"
            >
              {s.label}
            </a>
          ))}

          <div className="w-24 h-px bg-gold/20 my-2" />

          <button
            onClick={toggleLang}
            className="font-display text-sm tracking-[0.3em] text-gold/50 hover:text-gold transition-colors cursor-pointer"
          >
            [{lang === 'es' ? 'EN' : 'ES'}]
          </button>
        </div>
      )}
    </>
  );
}

function App() {
  const { t } = useLang();

  return (
    <Router>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-gold focus:text-bg font-display text-xs"
      >
        {t('a11y.skip')}
      </a>

      <div className="scanlines" aria-hidden="true" />

      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-bg" />

        <div className="absolute top-[3%] left-[8%] w-1.5 h-1.5 bg-text/80" />
        <div className="absolute top-[6%] left-[22%] w-1 h-1 bg-text/60" />
        <div className="absolute top-[2%] left-[38%] w-2 h-2 bg-text/70" />
        <div className="absolute top-[9%] left-[55%] w-1 h-1 bg-text/50" />
        <div className="absolute top-[4%] left-[70%] w-1.5 h-1.5 bg-text/80" />
        <div className="absolute top-[12%] left-[15%] w-1 h-1 bg-text/40" />
        <div className="absolute top-[7%] left-[48%] w-1 h-1 bg-text/60" />
        <div className="absolute top-[15%] left-[82%] w-1.5 h-1.5 bg-text/50" />
        <div className="absolute top-[5%] left-[90%] w-1 h-1 bg-text/70" />
        <div className="absolute top-[11%] left-[32%] w-1 h-1 bg-text/30" />
        <div className="absolute top-[8%] left-[65%] w-1.5 h-1.5 bg-text/40" />
        <div className="absolute top-[18%] left-[42%] w-1 h-1 bg-text/50" />
        <div className="absolute top-[3%] left-[78%] w-1 h-1 bg-text/60" />
        <div className="absolute top-[14%] left-[25%] w-1 h-1 bg-text/30" />
        <div className="absolute top-[6%] left-[58%] w-1 h-1 bg-text/40" />

        <div className="absolute top-[24%] right-[18%] w-16 h-16 rounded-full bg-text/6 shadow-[0_0_40px_8px_rgba(232,224,208,0.03)]" />

        <div className="absolute top-[25%] right-[16.5%] w-14 h-14 rounded-full bg-bg" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="absolute bottom-0 left-[2%] w-16 h-24 bg-surface" style={{clipPath:'polygon(0 100%, 0 30%, 20% 10%, 40% 25%, 60% 5%, 80% 35%, 100% 15%, 100% 100%)'}} />
          <div className="absolute bottom-0 left-[14%] w-20 h-20 bg-surface" style={{clipPath:'polygon(0 100%, 0 40%, 30% 20%, 50% 10%, 70% 30%, 100% 15%, 100% 100%)'}} />
          <div className="absolute bottom-0 left-[30%] w-24 h-28 bg-surface" style={{clipPath:'polygon(0 100%, 0 25%, 25% 5%, 50% 20%, 75% 0%, 100% 35%, 100% 100%)'}} />
          <div className="absolute bottom-0 left-[50%] w-20 h-20 bg-surface" style={{clipPath:'polygon(0 100%, 0 30%, 35% 10%, 65% 25%, 100% 15%, 100% 100%)'}} />
          <div className="absolute bottom-0 left-[66%] w-24 h-24 bg-surface" style={{clipPath:'polygon(0 100%, 0 35%, 20% 20%, 40% 5%, 60% 30%, 80% 10%, 100% 40%, 100% 100%)'}} />
          <div className="absolute bottom-0 left-[84%] w-16 h-16 bg-surface" style={{clipPath:'polygon(0 100%, 0 25%, 50% 10%, 100% 20%, 100% 100%)'}} />
        </div>

        <div className="absolute bottom-0 left-[10%] w-2 h-16 bg-text/5" />
        <div className="absolute bottom-0 left-[42%] w-2 h-20 bg-text/5" />
        <div className="absolute bottom-0 left-[75%] w-2 h-14 bg-text/5" />
        <div className="absolute bottom-0 left-[92%] w-1.5 h-12 bg-text/4" />
      </div>

      <MobileMenu />
      <Sidebar />

      <main className="relative z-10">
        <Header_about_component />
        <Work_component />
        <Technologies_component />
        <Perks_component />
        <Projects_component />
        <Contact_component />
        <Footer_component />
      </main>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
