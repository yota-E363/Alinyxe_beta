import { Suspense, lazy } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSpline = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-0 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />

      {/* 3D Spline Scene - Replace with your actual Spline scene URL */}
      <div className="absolute inset-0 z-10 opacity-60">
        <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
          <Spline 
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            L'Intelligence Artificielle
            <br />
            <span className="text-primary">Au Service de Votre</span>
            <br />
            <span className="text-secondary">Entreprise</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Chatbots IA avancés · Solutions sur mesure · Automatisation intelligente · Agents autonomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a href="/contact" className="btn btn-primary btn-lg">
              Demander une démo
            </a>
            <a href="/services" className="btn btn-outline btn-lg">
              Découvrir nos solutions
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20" data-aos="fade-up" data-aos-delay="600">
          {[
            { value: '500+', label: 'Clients satisfaits' },
            { value: '98%', label: 'Taux de satisfaction' },
            { value: '24/7', label: 'Support disponible' },
            { value: '10x', label: 'ROI moyen' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
