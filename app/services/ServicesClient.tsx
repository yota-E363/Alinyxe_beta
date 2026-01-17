"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageSquare, Bot, Cpu, Network, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const img1 = "/assets/1.jpg";
const img2 = "/assets/2.jpg";
const img3 = "/assets/3.jpg";
const img4 = "/assets/4.jpg";

export default function ServicesClient() {
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
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 glow-text">
              Nos <span className="text-primary">Services</span> IA
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Des solutions d'intelligence artificielle complètes pour transformer votre entreprise et propulser votre croissance
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div key={index} className="mb-16 sm:mb-24 md:mb-32 last:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                  <div
                    className={isReverse ? 'md:order-2' : undefined}
                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-xl">
                        <service.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">{service.description}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn btn-primary gap-2 text-sm sm:text-base">
                      En savoir plus
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </div>

                  <div
                    className={isReverse ? 'md:order-1' : undefined}
                    data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-primary/20 hover-lift aspect-video">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Prêt à Transformer Votre <span className="text-primary">Entreprise</span> ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
              Contactez-nous pour discuter de vos besoins et découvrir comment l'IA peut révolutionner votre activité
            </p>
            <Link href="/contact" className="btn btn-primary btn-md sm:btn-lg text-sm sm:text-base">
              Demander une consultation gratuite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}