import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Bootstrap_page from '../assets/images/bootstrap_page.png';
import Tailwind_page from '../assets/images/tailwind-project.png';
import html_photo from '../assets/images/html.png';
import bootstrap_logo from '../assets/images/bootstrap.png';
import tailwind_logo from '../assets/images/tailwind.png';
import javascript_logo from '../assets/images/javascript.png';
import react_logo from '../assets/images/react.png';
import css_photo from '../assets/images/css.png';
import php_logo from '../assets/images/php.png';
import spacex from '../assets/images/spacex.png';
import github from '../assets/svg/github.svg';
import { FaGithub } from "react-icons/fa";
import { useState, useRef, useEffect} from 'react';



const Projects_component = () => {

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

    
    return(
        <>
            <div ref={ref}  className='w-full h-auto  flex flex-col items-center justify-center bg-[#111827] dark:bg-slate-100 ' >
            <div className='transition ease-in duration-500  opacity-0 mt-10 lg:mt-12'>
                <h2 className='text-5xl font-poppins text-white text-center md:text-6xl dark:text-[#030712]'>Proyectos</h2>
            </div>
                <div className='mt-8 w-full h-auto flex flex-col items-center justify-center transition ease-in duration-500  opacity-0 md:flex-row md:gap-10 md:flex-wrap md:max-w-[70rem]'>
                <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://axelwestman.github.io/spacex-missions/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-spacex bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={tailwind_logo} alt="tailwind logo" className='w-10 object-contain' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                    <img src={react_logo} alt="react logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>SpaceX Launches</h2>
                            <p className='mt-3'>Sitio web desarrollado con HTML, Tailwind, Javasacript y React.Se realiza un llamado a la API de SpaceX para recuperar información sobre los lanzamientos que se realizaron y si estos fueron exitosos (boton verde) o fallaron (boton rojo).</p>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://acme-rockets-7p76.onrender.com/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-tailwind-photo  bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-15 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={tailwind_logo} alt="tailwind logo" className='w-10 object-contain' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>Acme Rockets</h2>
                            <p className='mt-3'>Acme Rockets es una compañia ficticia que se encarga de crear cohetes. Su sitio web fue desarrollado con HTML, Tailwind y JavaScipt, con el objetivo de llevar a la aplicación los conocimientos adquiridos sobre el Framework Tailwind.</p>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <a href="http://axel-westman.000.pe" target="_blank" className='w-full'>
                        <div className='w-full h-48 bg-php-project bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                        <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                <img src={css_photo} alt="css logo" className='w-10' />
                                <img src={php_logo} alt="php logo" className='w-10' />
                            </div>
                        </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>Next MCU Movie</h2>
                            <p className='mt-3'>Sitio web realizado con HTML, CSS y PHP. Se llama a la API de "When is the next MCU film?" para obtener datos sobre la próxima película de Marvel. Datos como el poster, nombre, descripción de la película se muestran en pantalla.</p>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://axelwestman.github.io/Responsive-Landing-Page-With-Bootstrap/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-bootstrap-photo bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={bootstrap_logo} alt="bootstrap logo" className='w-10 ' />
                                </div>
                        
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>BuildCon</h2>
                            <p className='mt-3'>Sitio web de una empresa ficticia (BuildCon), realizado con HTML y Bootstrap. Landing Page realizada para aplicar los conocimientos adquiridos sobre el framework Bootstrap, agilizando el proceso de añadir estilos y no usar CSS vanilla.</p>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://axelwestman.github.io/landing-page-react/build/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-react-photo bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={css_photo} alt="css logo" className='w-10' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                    <img src={react_logo} alt="react logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>FOODIE</h2>
                            <p className='mt-3'>FOODIE es una cadena de comidas ficticia. Su página web fue hecha con HTML, CSS, JavaScript y React.Este proyecto fue realizado para poner en práctica lo aprendido con React, dando un salto de JavaScript vanilla a una biblioteca/librería.</p>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-[340px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <a href="https://axelwestman.github.io/CALCULATOR-REACT/" target='_blank' className='w-full' >
                            <div className='w-full h-48 bg-calculator-react bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={css_photo} alt="css logo" className='w-10' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                    <img src={react_logo} alt="react logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3 font-poppins'>
                            <h2 className='text-2xl'>Calculadora</h2>
                            <p className='mt-3'>Calculadora con la cual se pueden realizar cálculos sencillos, como pueden ser la suma, resta, multiplicación y división. Realizada con HTML, CSS, JavaScript y React, implementando Hooks como "useState".</p>
                        </div>
                    </div>

                </div>
                <a href="https://github.com/AxelWestman" target='_blank'>
                    <div className='mb-12 w-36 h-14 bg-gray-700 text-white font-poppins rounded-md flex justify-center items-center gap-2 shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 lg:mb-12 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-slate-100'>
                        <FaGithub className='text-3xl text-slate-100 md:text-[1.9rem] dark:text-[#111827]'/>
                        <h2 className='text-xl mt-1 dark:text-[#111827]'>Ver más</h2>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Projects_component;