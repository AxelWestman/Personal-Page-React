import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Bootstrap_page from '../assets/images/bootstrap_page.png';


const Projects_component = () => {
    
    return(
        <>
            <div className='w-full h-auto'>
                <h2 className='text-3xl font-baskerville text-white text-center mb-4'>Proyectos</h2>
                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-[345px] mb-10 bg-gray-700 flex flex-col justify-center items-center rounded-md text-white shadow-lg'>
                        <div className='w-full h-48 bg-bootstrap-photo bg-cover bg-no-repeat bg-center rounded-t-md'>
                            
                        </div>
                        <div className='p-3'>
                            <h2 className='text-2xl'>Bootstrap</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae error praesentium est nisi, esse excepturi, impedit delectus blanditiis beatae quibusdam itaque iste quod culpa laudantium quisquam cum omnis quis voluptatum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects_component;