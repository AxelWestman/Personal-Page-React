import React from  'react';
import MePhoto from '../assets/images/IMG_20230522_220407_null~2-Photoroom.png'

const Header_component = () => {

    return (
        <>
            <div className='w-full h-lvh flex flex-col text-center items-center justify-center'>
            <div className='w-52 h-52 border rounded-full flex flex-col mb-4'>
                <img src={MePhoto} alt="Me" className='object-contain overflow-hidden'/>
            </div>
                <h1 className='font-baskerville text-7xl text-white'>Axel Westman</h1>
                <h3 className='font-baskerville text-3xl text-white'>Web Developer</h3>
            </div>
        </>
    );
}

export default Header_component;