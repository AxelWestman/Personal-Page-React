import React from 'react';
import Typewriter from 'typewriter-effect';
import MePhoto from '../assets/images/foto-perfil.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Header_component = () => {
  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center text-center pt-20 pb-16" id="header">
      <div className="relative mb-8">
        <div className="w-60 h-60 xs:w-72 xs:h-72 rounded-2xl overflow-hidden ring-2 ring-accent/20">
          <img
            src={MePhoto}
            alt="Axel Westman"
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-xl rotate-12 -z-10" />
      </div>

      <h1 className="font-display font-extrabold text-4xl xs:text-5xl md:text-6xl text-text-primary dark:text-stone-800 tracking-tight leading-tight text-balance">
        &lt; Axel Westman /&gt;
      </h1>

      <div className="mt-3 mb-5 font-body text-2xl xs:text-3xl font-medium text-accent">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Front-end Developer")
              .pauseFor(3000)
              .deleteAll()
              .start();
          }}
        />
      </div>

      <p className="font-body text-text-secondary dark:text-stone-500 text-lg max-w-md text-balance mb-8">
        Construyendo experiencias web que marcan la diferencia.
      </p>

      <nav className="flex items-center gap-3" aria-label="Redes sociales">
        <a
          href="https://github.com/AxelWestman"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card dark:bg-white dark:border-stone-200 border border-border-subtle text-text-secondary dark:text-stone-500 hover:text-accent dark:hover:text-accent hover:border-accent/30 transition-all duration-300 active:scale-95"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://linkedin.com/in/axel-westman-b4606a27b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card dark:bg-white dark:border-stone-200 border border-border-subtle text-text-secondary dark:text-stone-500 hover:text-accent dark:hover:text-accent hover:border-accent/30 transition-all duration-300 active:scale-95"
          aria-label="LinkedIn"
        >
          <AiOutlineLinkedin className="text-xl" />
        </a>
        <a
          href="mailto:axelwestman@outlook.com"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card dark:bg-white dark:border-stone-200 border border-border-subtle text-text-secondary dark:text-stone-500 hover:text-accent dark:hover:text-accent hover:border-accent/30 transition-all duration-300 active:scale-95"
          aria-label="Email"
        >
          <IoIosMail className="text-xl" />
        </a>
      </nav>

      <div id="about_two" />
    </section>
  );
};

export default Header_component;
