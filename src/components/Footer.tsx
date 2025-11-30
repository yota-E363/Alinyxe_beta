import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ALINYXE" className="h-12 w-12" />
              <span className="text-2xl font-bold glow-text">ALINYXE</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Experts en solutions d'intelligence artificielle avancées pour transformer votre entreprise.
            </p>
            <div className="flex gap-3">
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-background">
                <Linkedin size={20} />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-background">
                <Twitter size={20} />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-background">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Chatbots IA</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Solutions sur mesure</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Automatisation</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Agents autonomes</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Entreprise</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carrières</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span>contact@alinyxe.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ALINYXE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
