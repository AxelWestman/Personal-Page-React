import React from  'react';
import { useState, useRef, useEffect} from 'react';
import { PiReadCvLogoFill } from "react-icons/pi";
import cv from "../assets/docs/Axel_Westman_CV.pdf";



const About_component = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);
              },
              { rootMargin: "-150px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
        
        return () => observer.disconnect();
      }, [isIntersecting]);

      useEffect(() => {
        if (isIntersecting) {
          const firstDiv = ref.current.querySelector("div"); // Seleccionamos el primer div
      
          if (firstDiv) {
            firstDiv.classList.add("translate-y-[-0%]");
            firstDiv.classList.add("slide-in");
            firstDiv.classList.remove("opacity-0");
          }
        }
      }, [isIntersecting]);


    /*const [observer, setElements, entries] = useObserver({
        threshold: 0.75,
        root: null,
    });

    useEffect(() => {
        const images = document.querySelectorAll(".lazy");
        setElements(images);
    }, [setElements]);

    useEffect(function(){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy");
                observer.unobserve(lazyImage);
            }
        });
    }, [entries, observer]);*/

    return (
        <>
            <div ref={ref} className='w-full h-auto flex flex-col items-center justify-center lg:h-lvh' id="about">
                <div  className='w-4/5 flex flex-col items-center transition ease-in duration-500  opacity-0 mb-12'>
                    <h2 className='text-center text-white text-5xl font-poppins lg:text-left dark:text-[#111827]'>Sobre mi</h2>
                    <p className='font-poppins font-medium text-[20px] leading-[180%] text-white mt-4 dark:text-[#111827]'>Soy un desarrollador Front-end de la ciudad de Santa Fe, Argentina.<br /> Formado en la "Universidad Nacional del Litoral" y con distintos cursos. Con un constante deseo de aprender, busco unirme a un equipo dinámico donde pueda aplicar mis habilidades y crecer profesionalmente.<br /> Soy comunicativo, proactivo y con una gran capacidad para adaptarme a nuevos desafíos. ¡Pongámonos en contacto!</p>
                        <a href={ cv } target='_blank'>
                            <div className='mt-4 w-48 h-14 bg-gray-700 text-white font-poppins rounded-md flex justify-center items-center gap-3 shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:bg-slate-100  dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                                <PiReadCvLogoFill className='text-3xl dark:text-[#111827]'/>
                                <h2 className='text-xl mt-1 dark:text-[#111827]' id="experiencia_mobile">Currículum</h2>
                            </div>
                        </a>
                </div>
                <div id="experiencia"></div>
            </div>
        </>
    );

}

export default About_component;