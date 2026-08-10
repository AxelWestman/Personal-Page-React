import React from 'react';
import { PiReadCvLogoFill } from "react-icons/pi";
import cv from "../assets/docs/Axel_Westman_CV.pdf";

const About_component = () => {
  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center lg:items-start lg:pl-8 pb-16" id="about">
      <div className="w-full max-w-xl px-6 lg:px-0">
        <span className="font-body text-sm tracking-widest uppercase text-accent mb-4 block">
          Acerca de
        </span>

        <h2 className="font-display font-bold text-4xl xs:text-5xl md:text-6xl text-text-primary dark:text-stone-800 tracking-tight mb-8 text-balance">
          Sobre mi
        </h2>

        <p className="font-body text-text-secondary dark:text-stone-600 leading-relaxed text-[17px] space-y-4 mb-3 max-w-prose text-balance">
          Recibido bajo el título de "Técnico Universitario en Informática aplicada al Diseño Multimedia y de Sitios Web" en la Universidad Nacional del Litoral.
        </p>
        <p className="font-body text-text-secondary dark:text-stone-600 leading-relaxed text-[17px] mb-4 max-w-prose text-balance">
          Soy un desarrollador Front-end con conocimientos en Back-end de la ciudad de Santa Fe, Argentina. Con un constante deseo de aprender, busco unirme a un equipo dinámico donde pueda aplicar mis habilidades y crecer profesionalmente.
        </p>
        <p className="font-body text-text-secondary dark:text-stone-600 leading-relaxed text-[17px] mb-10 max-w-prose text-balance">
          Comunicativo, proactivo y con una gran capacidad para adaptarme a nuevos desafíos. ¡Pongámonos en contacto!
        </p>

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-body font-medium rounded-xl transition-all duration-300 hover:bg-accent-light active:scale-[0.98] focus-visible:outline-accent"
          id="experiencia_mobile"
        >
          <PiReadCvLogoFill className="text-xl" />
          Currículum
        </a>
      </div>

      <div id="experiencia" />
    </section>
  );
};

export default About_component;
