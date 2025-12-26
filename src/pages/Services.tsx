import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageSquare, Bot, Cpu, Network, CheckCircle, ArrowRight } from 'lucide-react';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const services = [
    {
      icon: MessageSquare,
      title: 'Chatbots IA Avancés',
      description: 'Créez des expériences conversationnelles exceptionnelles avec nos chatbots intelligents.',
      image: img1,
      features: [
        'Traitement du langage naturel avancé',
        'Apprentissage continu et amélioration',
        'Intégration multicanal (web, mobile, social)',
        'Support multilingue intelligent',
        'Personnalisation contextuelle',
        'Analytics et insights en temps réel',
      ],
    },
    {
      icon: Cpu,
      title: 'Solutions IA Sur Mesure',
      description: 'Développement de solutions IA personnalisées adaptées à vos défis métier uniques.',
      image: img4,
      features: [
        'Analyse de vos besoins spécifiques',
        'Architecture IA sur mesure',
        'Modèles ML personnalisés',
        'Intégration avec vos systèmes existants',
        'Formation et support continu',
        'Évolution et optimisation continues',
      ],
    },
    {
      icon: Bot,
      title: 'Automatisation Intelligente',
      description: 'Automatisez vos processus avec des systèmes qui apprennent et s\'adaptent.',
      image: img2,
      features: [
        'RPA (Robotic Process Automation)',
        'Automatisation des workflows',
        'Détection d\'anomalies intelligente',
        'Optimisation prédictive',
        'Réduction des coûts opérationnels',
        'Amélioration de la productivité',
      ],
    },
    {
      icon: Network,
      title: 'Agents IA Autonomes',
      description: 'Agents intelligents capables de prendre des décisions et d\'agir de manière indépendante.',
      image: img3,
      features: [
        'Prise de décision autonome',
        'Apprentissage par renforcement',
        'Adaptation dynamique',
        'Coordination multi-agents',
        'Gestion de tâches complexes',
        'Surveillance et alertes intelligentes',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Nos <span className="text-primary">Services</span> IA
            </h1>
            <p className="text-xl text-muted-foreground">
              Des solutions d'intelligence artificielle complètes pour transformer votre entreprise et propulser votre croissance
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-32 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <service.icon className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn btn-primary gap-2">
                    En savoir plus
                    <ArrowRight size={20} />
                  </a>
                </div>
                <div data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                  <div className="relative rounded-2xl overflow-hidden border border-primary/20 hover-lift">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Transformer Votre <span className="text-primary">Entreprise</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins et découvrir comment l'IA peut révolutionner votre activité
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Demander une consultation gratuite
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
