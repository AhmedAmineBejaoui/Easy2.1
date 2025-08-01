"use client";

import Image from 'next/image';
import MenuIcon from '../../public/assets/menu.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top Bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-6">
        <div className="flex items-center gap-2 text-white/60 hidden md:flex">
          <FontAwesomeIcon icon={faEnvelope} className="text-white w-6 h-6" />
          <p>studio@easyways.tn</p>
        </div>
        <div className="flex items-center gap-2 text-white/60 hidden md:flex">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white w-6 h-6" />
          <p>tunis, Tunisie</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-white w-6 h-6" />
          <p>+216 99216521</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/studio_logo.png"
              width={160}
              height={40}
              alt="Saas Logo"
              className="h-10 w-40 md:h-14 md:w-60 lg:h-14 lg:w-80"
            />
            {/* Menu Icon */}
            <div
              className="h-6 w-6 md:hidden cursor-pointer"
              onClick={toggleNav}
            >
              <MenuIcon alt="Menu Icon" className="h-5 w-5 md:hidden" />
            </div>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex md:ml-6 gap-6 text-black/60 items-center">
              <button onClick={() => scrollToSection('home')}>Acceuil</button>
              <button onClick={() => scrollToSection('services')}>Services</button>
              <button onClick={() => scrollToSection('objectifs')}>Objectifs</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
              <a
                href="https://www.facebook.com/profile.php?id=61568758889313"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
                  Commencer
                </button>
              </a>
            </nav>
          </div>

          {/* Mobile Navbar */}
          {isNavOpen && (
            <nav className="md:hidden mt-4 bg-white shadow-md rounded-lg p-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-black">Acceuil</button>
              <button onClick={() => scrollToSection('services')} className="text-black">Services</button>
              <button onClick={() => scrollToSection('objectifs')} className="text-black">Objectifs</button>
              <button onClick={() => scrollToSection('contact')} className="text-black">Contact</button>
              <a
                href="https://www.facebook.com/profile.php?id=61568758889313"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
                    Commencer
                  </button>
                </div>
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
