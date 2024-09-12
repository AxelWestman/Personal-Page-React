import React from  'react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Link as Enlace} from 'react-router-dom';
import {AcmeLogo} from "./AcmeLogo";
import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";


const Navbar_component = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: true,
      offset: -70 // Ajusta el offset según tu diseño
    });
  };

    return(
        <>
     <Navbar disableAnimation isBordered id="barra" className='bg-[#030712] bg-opacity-45 dark:bg-[#FFFFFF] dark:bg-opacity-45'>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle className='text-slate-100 dark:text-[#030712]' />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarBrand>
        </NavbarBrand>
        <NavbarItem>
          <a href="#first"  color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Inicio
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about" color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Sobre mi
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#experiencia" color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Experiencia
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#tecnologias" color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Habilidades
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#proyectos" color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Proyectos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contacto" color="foreground" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#030712]'>
            Contacto
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=''>
        <NavbarItem className="hidden lg:flex">
          
        </NavbarItem>
        <NavbarItem>
          <Switch onClick={handleThemeSwitch}
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
            <SunIcon className={className} />
            ) : (
            <MoonIcon className={className} />)} >
          </Switch>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-gray-900 bg-opacity-60 dark:bg-[#FFFFFF] dark:bg-opacity-60'>
        
        <ul>
          <li className='text-3xl font-baskerville text-white mb-4 mt-5'><a href="#header" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]'>Inicio</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#about" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]'>Sobre mi</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#experiencia" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]'>Experiencia</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#tecnologias" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]'>Habilidades</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#proyectos" className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]'>Proyectos</a></li>
          <li className='text-3xl font-baskerville text-white mb-4'><a href="#contacto"  className='font-poppins  font-medium leading-normal text-white text-[20px] dark:text-[#111827]' >Contacto</a></li>
        </ul>
      </NavbarMenu>
        
    </Navbar>
   
    </>
    );
}

export default Navbar_component;
