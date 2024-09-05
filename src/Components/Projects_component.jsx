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
            <div ref={ref}  className='w-full h-auto mt-24 flex flex-col items-center' id="proyectos">
            <div className='transition ease-in duration-500  opacity-0'>
                <h2 className='text-3xl font-baskerville text-white text-center mb-4 '>Proyectos</h2>
            </div>
                <div className='w-full h-auto flex flex-col items-center justify-center transition ease-in duration-500  opacity-0 md:flex-row md:gap-10 md:flex-wrap md:max-w-[70rem]'>
                    
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
                        <a href="https://axelwestman.github.io/Responsive-Landing-Page-With-Bootstrap/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-bootstrap-photo bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={bootstrap_logo} alt="bootstrap logo" className='w-10 ' />
                                </div>
                        
                            </div>
                        </a>
                        <div className='p-3'>
                            <h2 className='text-2xl'>Bootstrap</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
                        <a href="https://acme-rockets-7p76.onrender.com/" target='_blank' className='w-full'>
                            <div className='w-full h-48 bg-tailwind-photo bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                                <div className='w-full bg-gray-500 h-10 bg-opacity-15 flex '>
                                    <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                    <img src={tailwind_logo} alt="tailwind logo" className='w-10 object-contain' />
                                    <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                </div>
                            </div>
                        </a>
                        <div className='p-3'>
                            <h2 className='text-2xl'>Tailwind</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
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
                        <div className='p-3'>
                            <h2 className='text-2xl'>React</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
                        <div className='w-full h-48 bg-php-project bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                        <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                <img src={css_photo} alt="css logo" className='w-10' />
                                <img src={php_logo} alt="php logo" className='w-10' />
                            </div>
                        </div>
                        <div className='p-3'>
                            <h2 className='text-2xl'>PHP</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
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
                        <div className='p-3'>
                            <h2 className='text-2xl'>React</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-2xl shadow-blue-500/20'>
                        <div className='w-full h-48 bg-react-photo bg-cover bg-no-repeat bg-center rounded-t-md flex flex-col justify-end'>
                        <div className='w-full bg-gray-500 h-10 bg-opacity-50 flex '>
                                <img src={html_photo} alt="html logo" className='w-10 ml-1' />
                                <img src={css_photo} alt="css logo" className='w-10' />
                                <img src={javascript_logo} alt="javascript logo" className='w-10' />
                                <img src={react_logo} alt="react logo" className='w-10' />
                            </div>
                        </div>
                        <div className='p-3'>
                            <h2 className='text-2xl'>React</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>

                </div>
                <a href="https://github.com/AxelWestman" target='_blank'>
                    <div className='w-36 h-14 bg-gray-700 text-white font-baskerville rounded-md flex justify-center items-center gap-3 shadow-2xl shadow-blue-500/20'>
                        <img src={github} alt="github logo" className='w-9'/>
                        <h2 className='text-xl mt-1'>Ver más</h2>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Projects_component;