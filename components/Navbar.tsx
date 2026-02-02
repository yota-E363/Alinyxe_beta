"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logo = "/assets/logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src={logo}
              alt="ALINYXE Logo"
              width={48}
              height={48}
              className="h-12 w-12 transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl  font-bold glow-text">ALI<span className="text-sky-400 " >NYXE</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="nav-link text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="nav-link text-foreground hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="/contact" className="nav-link text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Démarrer
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-info w-full">
              Démarrer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;