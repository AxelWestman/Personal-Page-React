import React from  'react';
import html_photo from '../assets/images/html.png';
import css_photo from '../assets/images/css.png';
import javascript_logo from '../assets/images/javascript.png';
import php_logo from '../assets/images/php.png';
import mysql_logo from '../assets/images/mysql.png';
import nodejs_logo from '../assets/images/nodejs.png';
import typescript_logo from '../assets/images/typescript.png';
import react_logo from '../assets/images/react.png';
import figma_logo from '../assets/images/figma.png';
import tailwind_logo from '../assets/images/tailwind.png';
import bootstrap_logo from '../assets/images/bootstrap.png';


const Technologies_component = () => {

    return(
            <>
                <div className='w-full h-96 flex flex-col items-center justify-center'>
                    <div className='w-4/5 h-auto flex flex-wrap items-center justify-center'>
                        <h2 className='text-center text-white text-3xl font-baskerville'>Tecnologías</h2>
                        <div className='w-full h-auto flex flex-wrap items-center justify-center mt-4'>
                            <img src={figma_logo} alt="figma logo" className='w-20'/>
                            <img src={html_photo} alt="html logo" className='w-20' />
                            <img src={css_photo} alt="css logo" className='w-20' />
                            <img src={javascript_logo} alt="javascript logo" className='w-20'/>
                            <img src={php_logo} alt="php logo" className='w-20'/>
                            <img src={mysql_logo} alt="mysql logo" className='w-20'/>
                            <img src={nodejs_logo} alt="nodejs logo" className='w-20'/>
                            <img src={typescript_logo} alt="typescript logo" className='w-20'/>
                            <img src={react_logo} alt="react logo" className='w-20'/>
                            <img src={tailwind_logo} alt="tailwind logo" className='w-20'/>
                            <img src={bootstrap_logo} alt="bootstrap logo" className='w-20'/>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Technologies_component;