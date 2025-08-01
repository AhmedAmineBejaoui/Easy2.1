"use client";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* Logo Section */}
        <div className="inline-flex p-1 relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-red-500 before:absolute">
          <Image
            src="/assets/studio_logo.png"
            width={160}
            height={40}
            alt="Easy Ways Studio Logo"
            className="relative h-10 w-40 md:h-14 md:w-60 lg:h-14 lg:w-80"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-red-500">
            Acceuil
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-red-500">
            Services
          </button>
          <button onClick={() => scrollToSection('objectifs')} className="hover:text-red-500">
            Objectifs
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-red-500">
            Contact
          </button>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.facebook.com/profile.php?id=61568758889313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/easyways.studio/?next=%2Freel%2FC6wLl8IIgur%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@easy.ways.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-500"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.linkedin.com/company/easy-ways-studio/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-500"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="mt-6">&copy; 2025 Easy Ways Studio, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
