import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import HeroSpline from '@/components/HeroSpline';
import About from '@/components/About';
import DiversServices from '@/components/DiversServices';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonial';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Accueil = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSpline />
      <About />
      <DiversServices />
      <Projects />
      <Testimonial />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Accueil;
