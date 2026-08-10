import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import Header_about_component from './Components/Header_about_component';
import Work_component from './Components/Work_component';
import Technologies_component from './Components/Technologies_component';
import Projects_component from './Components/Projects_component';
import Contact_component from './Components/Contact_component';
import Footer_component from './Components/Footer_component';

function Sidebar() {
  const { t, lang, toggleLang } = useLang();

  const sections = [
    { id: 'hero', num: '01', label: t('sidebar.inicio') },
    { id: 'experiencia', num: '02', label: t('sidebar.exp') },
    { id: 'habilidades', num: '03', label: t('sidebar.skills') },
    { id: 'proyectos', num: '04', label: t('sidebar.works') },
    { id: 'contacto', num: '05', label: t('sidebar.mail') },
  ];

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
        >
          <span className="font-label text-[10px] tracking-widest text-ink-muted group-hover:text-vermilion transition-colors">
            {s.num}
          </span>
          <span className="w-4 h-px bg-ink-muted/30 group-hover:bg-vermilion group-hover:w-8 transition-all" />
          <span className="font-label text-[10px] tracking-widest text-ink-muted group-hover:text-ink transition-colors opacity-0 group-hover:opacity-100">
            {s.label}
          </span>
        </a>
      ))}

      <div className="w-px h-12 bg-ink/10 ml-[0.4rem]" />

      <div className="flex flex-col items-center gap-3 ml-px">
        <span className="font-mono text-[10px] text-ink-muted/40 tracking-[0.4em] [writing-mode:vertical-rl] select-none">
          WESTMAN
        </span>

        <div className="flex flex-col items-center gap-px border border-ink/10 p-0.5">
          <button
            onClick={lang === 'es' ? undefined : toggleLang}
            className={`w-6 h-5 font-mono text-[9px] tracking-wider transition-all ${
              lang === 'es'
                ? 'bg-ink text-cream'
                : 'text-ink-muted/40 hover:text-ink-muted cursor-pointer'
            }`}
            aria-label="Español"
          >
            ES
          </button>
          <button
            onClick={lang === 'en' ? undefined : toggleLang}
            className={`w-6 h-5 font-mono text-[9px] tracking-wider transition-all ${
              lang === 'en'
                ? 'bg-ink text-cream'
                : 'text-ink-muted/40 hover:text-ink-muted cursor-pointer'
            }`}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const { t } = useLang();

  return (
    <Router>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-vermilion focus:text-cream"
      >
        {t('a11y.skip')}
      </a>

      <Sidebar />

      <main>
        <Header_about_component />
        <Work_component />
        <Technologies_component />
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
