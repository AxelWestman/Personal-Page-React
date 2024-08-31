import React from  'react';
import cv from '../assets/svg/cv.svg'

const About_component = () => {

    return (
        <>
            <div className='w-full h-lvh flex flex-col items-center justify-center ' id="about">
                <div className='w-4/5 flex flex-col items-center'>
                    <h2 className='text-center text-white text-3xl font-baskerville'>Sobre mi</h2>
                    <p className='text-2xl font-baskerville text-white mt-4'>Hey there! My name is Axel, and i'm a junior web developer based in Santa Fe, Argentina. I work with some of the popular front end technologies to create beautiful websites that get noticed. I seek experience to gain more knowledge in the web development field.
                       If you are in need of a beautiful simple website, I'm your guy. I look forward to talking to you soon!</p>
                       <div className='mt-4 w-48 h-14 bg-gray-700 text-white font-baskerville rounded-md flex justify-center items-center gap-3'>
                        <img src={cv} alt="github logo" className='w-9'/>
                        <h2 className='text-xl mt-1'>Currículum</h2>
                    </div>
                </div>
            </div>
        </>
    );

}

export default About_component;