import React from 'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import { useState, useRef, useEffect} from 'react';

const Work_component = () => {

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
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("translate-y-[-0%]")
                el.classList.add("slide-in");
                el.classList.remove("opacity-0");
            });
        }
      }, [isIntersecting]);


      return (
        <>
            <div ref={ref}  className='w-full h-auto  flex flex-col items-center justify-center bg-[#111827] dark:bg-slate-100' >
                <div className='transition ease-in duration-500  opacity-0 mt-10 lg:mt-12'>
                    <h2 className='text-5xl font-poppins text-white text-center md:text-6xl dark:text-[#030712]'>Experiencia</h2>
                </div>
                <div className='mt-8 w-full h-auto flex flex-col items-center justify-center transition ease-in duration-500  opacity-0 md:flex-row md:gap-10 md:flex-wrap md:max-w-[70rem]'>
                <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://rqapp.com.ar/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-dkl-page bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={css_photo} alt="css logo" className='w-10' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>Required App</h2>
                            <p id="habilidades" className='mt-3'>Primer trabajo Freelance realizado en 2023 para la empresa Required App. Sitio web realizado con HTML, CSS y JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
};

export default Work_component;