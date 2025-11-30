import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="ALINYXE Logo" className="h-12 w-12 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold glow-text">ALINYXE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/services" className="nav-link text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/contact" className="btn btn-primary">
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
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full">
              Démarrer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
