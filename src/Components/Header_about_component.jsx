import React from 'react';
import Header_component from './Header_component';
import About_component from './About_component';

const Header_about_component = () =>{
    return(
        <>
        <section className='w-full flex items-center justify-center ' id="first">
            <div className='flex flex-col  md:flex-row md:max-w-[70rem]'>
                <Header_component />
                <About_component />
            </div>
        </section>
        </>
    );
}

export default Header_about_component;