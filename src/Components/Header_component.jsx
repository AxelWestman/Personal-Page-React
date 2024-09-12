import React from  'react';
import MePhoto from '../assets/images/foto-perfil.png'
import Typewriter from 'typewriter-effect';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Header_component = () => {

    return (
        <>
            <div className='w-full h-lvh flex flex-col text-center items-center justify-center ' id="header">
            <div className='w-56 h-56 newphones:w-72 newphones:h-72 rounded-full flex flex-col mb-4 items-center  justify-center overflow-hidden shadow-2xl shadow-blue-500/20 md:w-60 md:h-60 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                <img src={MePhoto} alt="Me" className='w-48 newphones:w-60 md:w-[12.4rem]'/>
            </div>
                <h1 className='font-poppins font-bold text-3xl  newphones:text-4xl text-white mb-2 md:mb-1 md:text-5xl dark:text-[#111827]'>&lt; Axel Westman /&gt;</h1>
                <h3 className='font-poppins text-2xl text-cyan-400 float-left relative mb-2 newphones:text-3xl md:mb-0 dark:text-[#111827]'>
                    <Typewriter
                        options={{
                        autoStart: true,
                        loop: true,
                      }}
                        onInit={typewriter => {
                            typewriter
                            .typeString('Front-end Developer')
                            .pauseFor(3000)
                            .deleteAll()
                            .start()
                        }}
                    />
                </h3>
                <div className='bg-gray-700 w-44 h-12 mt-3 gap-2 rounded-3xl flex justify-center items-center shadow-2xl shadow-blue-500/20 md:transform md:transition md:duration-500 md:hover:scale-105 md:h-11 dark:bg-slate-100 dark:bg-opacity-100 dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <a href="https://github.com/AxelWestman" target='_blank'><FaGithub className='text-[2.4rem] text-slate-100 md:text-[1.9rem] dark:text-[#111827]'/></a>
                    <a href="https://linkedin.com/in/axel-westman-b4606a27b" target='_blank'><AiOutlineLinkedin className='text-5xl text-slate-100 md:text-4xl dark:text-[#111827]'/></a>
                    <a href="mailto:axelwestman@outlook.com"><IoIosMail  className='text-5xl text-slate-100 md:text-[2.50rem] dark:text-[#111827]'/></a>
                </div>
                <div id="about_two"></div>
            </div>
        </>
    );
}

export default Header_component;