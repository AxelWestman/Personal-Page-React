import React from 'react';
import Github_svg from '../assets/svg/github.svg';
import Linkedin_svg from '../assets/svg/linkedin.svg';
import Mail_svg from '../assets/svg/mail.svg';

const Footer_component = () => {

    return(
        <>
            <div className='w-full h-32  flex items-center justify-center'>
                <div className='flex items-center  justify-center gap-5'>
                    <a href="https://github.com/AxelWestman" target='_blank'><img src={Github_svg} alt="github logo" className='w-10 opacity-75' /></a>
                    <a href="https://linkedin.com/in/axel-westman-b4606a27b" target='_blank'><img src={Linkedin_svg} alt="linkedin logo" className='w-10 opacity-75' /></a>
                    <a href="mailto:axelwestman@outlook.com"><img src={Mail_svg} alt="mail logo" className='w-10 opacity-75' /></a>
                </div>
            </div>
        </>
    );
}

export default Footer_component; 