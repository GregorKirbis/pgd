'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Prevents hydration issue

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents mismatch by delaying render

  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white dark:bg-black shadow-md transition duration-200">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between py-4">
        
        {/* Logo */}
        <a href="/" className="px-4">
          <Image src="/images/logo/logo-light_pgd.svg" alt="PGD" width={120} height={40} className="dark:hidden" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-black dark:text-white">
          <a href="/" className="hover:text-red transition">Domov</a>
          <a href="/o-nas" className="hover:text-red transition">O Nas</a>
          <a href="/zgodovina" className="hover:text-red transition">Zgodovina</a>
          <a href="/aktualno" className="hover:text-red transition">Aktualno</a>
          <a href="/kontakt" className="hover:text-red transition">Kontakt</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col space-y-1 p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-x-0 top-18 bg-white dark:bg-black shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          } lg:hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 py-6 text-black dark:text-white">
            <a href="/" className="hover:text-red transition" onClick={() => setIsOpen(false)}>Domov</a>
            <a href="/o-nas" className="hover:text-red transition" onClick={() => setIsOpen(false)}>O Nas</a>
            <a href="/zgodovina" className="hover:text-red transition" onClick={() => setIsOpen(false)}>Zgodovina</a>
            <a href="/aktualno" className="hover:text-red transition" onClick={() => setIsOpen(false)}>Aktualno</a>
            <a href="/kontakt" className="hover:text-red transition" onClick={() => setIsOpen(false)}>Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
