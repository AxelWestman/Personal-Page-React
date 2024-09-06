import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer_component = () => {

    return(
        <>
            <div className='w-full h-32  flex items-center justify-center'>
                <div className='flex items-center  justify-center gap-5'>
                    <a href="https://github.com/AxelWestman" target='_blank'><FaGithub className='text-[2.6rem] text-black'/></a>
                    <a href="https://linkedin.com/in/axel-westman-b4606a27b" target='_blank'><AiOutlineLinkedin className='text-5xl text-black '/></a>
                    <a href="mailto:axelwestman@outlook.com"><IoIosMail  className='text-5xl text-black '/></a>
                </div>
            </div>
        </>
    );
}

export default Footer_component; 