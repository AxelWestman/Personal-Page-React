import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem, Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const navLinks = [
  { href: "#first", label: "Inicio" },
  { href: "#about", label: "Sobre mi" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar_component = () => {
  const [theme, setTheme] = useState("light");
  const [activeLink, setActiveLink] = useState("#first");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Navbar
      disableAnimation
      className="fixed top-0 bg-surface-dark/70 dark:bg-stone-50/80 backdrop-blur-xl border-b border-white/[0.04] dark:border-stone-200 z-40"
      maxWidth="xl"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle className="text-text-primary dark:text-stone-800" />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1" justify="center">
        <NavbarBrand className="mr-8">
          <p className="font-display font-bold text-xl text-text-primary dark:text-stone-800 tracking-tight">
            AW
          </p>
        </NavbarBrand>
        {navLinks.map((link) => (
          <NavbarItem key={link.href} isActive={activeLink === link.href}>
            <a
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`font-body text-sm tracking-wide transition-colors duration-300 px-3 py-2 rounded-lg ${
                activeLink === link.href
                  ? 'text-accent bg-accent/10'
                  : 'text-text-secondary dark:text-stone-500 hover:text-text-primary dark:hover:text-stone-800 hover:bg-white/[0.04] dark:hover:bg-stone-100'
              }`}
            >
              {link.label}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            onClick={handleThemeSwitch}
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-surface-dark/95 dark:bg-stone-50/95 backdrop-blur-xl pt-8">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-2xl text-text-primary dark:text-stone-800 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbar_component;
