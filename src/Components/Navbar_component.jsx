import React from  'react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About_component';


const Navbar_component = () => {

 

    return(
        <>
      <BrowserRouter>
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
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="./about" >
            Sobre mi
          </Link>
          <Routes>
          <Route path="./about" element={<About />} />
          </Routes>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Tecnologías
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Títulos y Certificaciones
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=''>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-gray-900 bg-opacity-60'>
        <ul>
          <li className='text-3xl font-baskerville text-white mb-4 mt-5'>Home</li>
          <li className='text-3xl font-baskerville text-white mb-4'>Sobre mi</li>
          <li className='text-3xl font-baskerville text-white mb-4'>Tecnologías</li>
          <li className='text-3xl font-baskerville text-white mb-4'>Proyectos</li>
          <li className='text-3xl font-baskerville text-white mb-4'>Títulos y Certificaciones</li>
        </ul>
      </NavbarMenu>
    </Navbar>
    </BrowserRouter>
    </>
    );
}

export default Navbar_component;
