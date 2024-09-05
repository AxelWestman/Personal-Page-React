import React from  'react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Link as Enlace} from 'react-router-dom';


import {AcmeLogo} from "./AcmeLogo";


const Navbar_component = () => {



  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: true,
      offset: -70 // Ajusta el offset según tu diseño
    });
  };

    return(
        <>
     <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        </NavbarBrand>
        <NavbarItem>
          <a href="#header"  color="foreground" >
            Inicio
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about" color="foreground" >
            Sobre mi
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#tecnologias" color="foreground" >
            Tecnologías
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#proyectos" color="foreground" >
            Proyectos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#certificaciones" color="foreground" >
            Títulos y Certificaciones
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=''>
        <NavbarItem className="hidden lg:flex">
          <Link>Login</Link>
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-gray-900 bg-opacity-60'>
        <ul>
          <li className='text-3xl font-baskerville text-white mb-4 mt-5'><a href="#header">Inicio</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#about">Sobre mi</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#tecnologias">Tecnologías</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#proyectos">Proyectos</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#certificaciones">Títulos y Certificaciones</a></li>
        </ul>
      </NavbarMenu>
    </Navbar>
   
    </>
    );
}

export default Navbar_component;
