import React from 'react';
import { useState, useRef, useEffect} from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contacto = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);
              },
              { rootMargin: "-400px" }
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
            <div ref={ref} className='w-full h-auto font-poppins mt-10 flex flex-col items-center' id="contacto">
                <div className='w-4/5 h-auto flex flex-col items-center transition ease-in duration-500  opacity-0  md:h-72'>
                    <h2 className='text-center text-5xl text-white mb-5 md:text-6xl'>Contacto</h2>
                    <p className='text-white text-xl text-center'>Si estás buscando un programador Front-end, contáctame a través del siguiente mail:</p>
                    <div className='flex justy-center items-center mt-3'><a href="mailto:axelwestman@outlook.com" className='flex items-center'><IoIosMail  className='text-4xl text-slate-100 mr-2 md:text-[2.50rem]'/><p className='text-white text-lg newphones:xl'>axelwestman@outlook.com</p></a></div>
                    <p className='text-white text-xl text-center mt-8 mb-3'>También puedes encontrarme en LinkedIn y GitHub:</p>
                    <div className='flex justy-center items-center'><a href="https://linkedin.com/in/axel-westman-b4606a27b" target='_blank' className='flex items-center'><AiOutlineLinkedin className='text-4xl text-slate-100 mr-2 md:text-4xl'/><p className='text-white text-xl'>Axel Westman</p></a></div>
                    <div className='flex row justy-center items-center mt-3'><a href="https://github.com/AxelWestman" target='_blank' className='flex items-center'><FaGithub className='text-[2.4rem] text-slate-100 mr-2 md:text-[1.9rem]'/><p className='text-white text-xl'>Axel Westman</p></a></div>
                </div>
            </div>
        </>
    );
}

export default Contacto;