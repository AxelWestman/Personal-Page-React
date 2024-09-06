import React from  'react';
import MePhoto from '../assets/images/foto-perfil.png'
import Typewriter from 'typewriter-effect';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Header_component = () => {

    return (
        <>
            <div className='w-full h-lvh flex flex-col text-center items-center justify-center' id="header">
            <div className='w-72 h-72  rounded-full flex flex-col mb-4 items-center  justify-center overflow-hidden shadow-2xl shadow-blue-500/20 md:w-60 md:h-60'>
                <img src={MePhoto} alt="Me" className='w-60 md:w-[12.4rem]'/>
            </div>
                <h1 className='font-baskerville text-5xl text-white mb-2 md:mb-1'>Axel Westman</h1>
                <h3 className='font-baskerville text-3xl text-white float-left relative mb-2 md:mb-0'>
                    <Typewriter
                        options={{
                        autoStart: true,
                        loop: true,
                      }}
                        onInit={typewriter => {
                            typewriter
                            .typeString('Web Developer')
                            .pauseFor(3000)
                            .deleteAll()
                            .start()
                        }}
                    />
                </h3>
                <div className='bg-white bg-opacity-5 w-44 h-12 mt-3 gap-2 rounded-3xl flex justify-center items-center shadow-2xl shadow-blue-500/20 md:h-10'>
                    <a href="https://github.com/AxelWestman" target='_blank'><FaGithub className='text-[2.6rem] text-black md:text-[1.9rem]'/></a>
                    <a href="https://linkedin.com/in/axel-westman-b4606a27b" target='_blank'><AiOutlineLinkedin className='text-5xl text-black md:text-4xl'/></a>
                    <a href="mailto:axelwestman@outlook.com"><IoIosMail  className='text-5xl text-black md:text-[2.50rem]'/></a>
                </div>
            </div>
        </>
    );
}

export default Header_component;