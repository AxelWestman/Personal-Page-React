import React from 'react';
import Header_component from './Header_component';
import About_component from './About_component';

const Header_about_component = () =>{
    return(
        <>
        <section className='flex flex-col md:flex-row'>
            <Header_component />
            <About_component />
        </section>
        </>
    );
}

export default Header_about_component;