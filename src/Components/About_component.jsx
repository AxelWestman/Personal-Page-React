import React from  'react';

const About_component = () => {

    return (
        <>
            <div className='w-full h-lvh bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col items-center justify-center '>
                <div className='w-4/5'>
                    <h2 className='text-center text-white text-4xl font-baskerville'>Sobre mi</h2>
                    <p className='text-2xl font-baskerville text-white mt-4'>Hey there! My name is Axel, and i'm a junior web developer based in Santa Fe, Argentina. I work with some of the popular front end technologies to create beautiful websites that get noticed. I seek experience to gain more knowledge in the web development field.
                       If you are in need of a beautiful simple website, I'm your guy. I look forward to talking to you soon!</p>
                </div>
            </div>
        </>
    );

}

export default About_component;