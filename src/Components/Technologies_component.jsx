import React from  'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import php_logo from '../assets/images/php.png';
import mysql_logo from '../assets/images/mysql.png';
import nodejs_logo from '../assets/images/nodejs.png';
import typescript_logo from '../assets/images/typescript.png';
import react_logo from '../assets/images/react.png';
import figma_logo from '../assets/images/figma.png';
import tailwind_logo from '../assets/images/tailwind.png';
import bootstrap_logo from '../assets/images/bootstrap.png';
import git_logo from '../assets/images/git.png';
import { useState, useRef, useEffect} from 'react';


const Technologies_component = () => {

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


    return(
            <>
                <div ref={ref} className='w-full h-96 flex flex-col items-center justify-center mt-5 md:mt-0' id="tecnologias">
                    <div className='w-4/5 h-auto flex flex-wrap items-center justify-center transition ease-in duration-500  opacity-0 md:flex-col md:max-w-[60rem]'>
                        <h2 className='text-center text-white text-3xl font-baskerville'>Tecnologías</h2>
                        <div className='w-full h-auto flex flex-wrap items-center justify-center mt-4 md:w-1/2  '>
                            <img src={figma_logo} alt="figma logo" className='w-20 '/>
                            <img src={html_photo} alt="html logo" className='w-20' />
                            <img src={css_photo} alt="css logo" className='w-20' />
                            <img src={javascript_logo} alt="javascript logo" className='w-20'/>
                            <img src={php_logo} alt="php logo" className='w-20'/>
                            <img src={mysql_logo} alt="mysql logo" className='w-20'/>
                            <img src={nodejs_logo} alt="nodejs logo" className='w-20'/>
                            <img src={typescript_logo} alt="typescript logo" className='w-20'/>
                            <img src={react_logo} alt="react logo" className='w-20'/>
                            <img src={tailwind_logo} alt="tailwind logo" className='w-20'/>
                            <img src={bootstrap_logo} alt="bootstrap logo" className='w-20'/>
                            <img src={git_logo} alt="git logo" className='w-20' />
                        </div>
                        <div id="proyectos"></div>
                    </div>
                </div>
            </>
    );
}

export default Technologies_component;