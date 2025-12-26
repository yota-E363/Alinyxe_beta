
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Pricing from '@/components/Pricing';
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
    <>      
    <Helmet>
        <title>ALINYXE - Solutions d'Intelligence Artificielle | Chatbots IA & Automatisation</title>
        <meta name="description" content="ALINYXE, expert en intelligence artificielle : chatbots IA avancés, automatisation intelligente, agents autonomes. Transformez votre entreprise avec nos solutions IA sur mesure." />
        <meta name="keywords" content="alinyxe, chatbot ia, intelligence artificielle, automatisation ia, agents autonomes, solutions ia entreprise, service Alinyxe, aide agents, solution aux probles de gestion" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ALINYXE - Solutions d'Intelligence Artificielle Avancées" />
        <meta property="og:description" content="Expert en chatbots IA, automatisation et agents autonomes pour transformer votre entreprise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alinyxe.online/" />
        <meta property="og:image" content="https://alinyxe.online/images/banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ALINYXE - Solutions IA Avancées" />
        <meta name="twitter:description" content="Chatbots intelligents, automatisation IA et agents autonomes." />
        <meta name="twitter:image" content="https://alinyxe.online/images/banner.jpg" />
        <meta name="twitter:site" content="@ALINYXE" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ALINYXE",
            "url": "https://alinyxe.online",
            "logo": "https://alinyxe.online/images/logo.png",
            "image": "https://alinyxe.online/images/banner.jpg",
            "description": "Solutions d'intelligence artificielle avancées : chatbots IA, automatisation et agents autonomes",
            "sameAs": [
              "https://www.linkedin.com/in/alinyxe-ia-558291367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            ]
          })}
        </script>
      </Helmet>
      

    <div  className="min-h-screen">
      <Navbar />
      <HeroSpline />


      <About />
      <DiversServices />
      <Projects />
      <Testimonial />
      <Partners />
      <Pricing />

      <CTA />
      <Footer />
    </div>
    </>
  );
};

export default Accueil;
