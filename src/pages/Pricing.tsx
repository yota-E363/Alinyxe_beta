import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { Check, HelpCircle, Zap, Shield, Clock, Users } from 'lucide-react';

const PricingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const comparison = [
    {
      category: 'Chatbot IA',
      starter: 'Basique',
      professional: 'Avancé',
      enterprise: 'Sur mesure',
    },
    {
      category: 'Conversations/mois',
      starter: '1 000',
      professional: '10 000',
      enterprise: 'Illimitées',
    },
    {
      category: 'Canaux',
      starter: 'Web',
      professional: 'Multi-canal',
      enterprise: 'Tous + Custom',
    },
    {
      category: 'Support',
      starter: 'Email',
      professional: '24/7 Prioritaire',
      enterprise: 'Dédié + Manager',
    },
    {
      category: 'Analytiques',
      starter: 'Basiques',
      professional: 'Avancées + BI',
      enterprise: 'Personnalisées',
    },
    {
      category: 'Formation',
      starter: '2h',
      professional: '8h',
      enterprise: 'Illimitée',
    },
    {
      category: 'Personnalisation',
      starter: '❌',
      professional: '✓ Avancée',
      enterprise: '✓ Complète',
    },
    {
      category: 'Automatisation',
      starter: '❌',
      professional: '✓ Intelligente',
      enterprise: '✓ Avancée',
    },
    {
      category: 'Agents autonomes',
      starter: '❌',
      professional: '❌',
      enterprise: '✓ Multiples',
    },
    {
      category: 'API personnalisée',
      starter: '❌',
      professional: '❌',
      enterprise: '✓ + Webhooks',
    },
  ];

  const faqs = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.',
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nos tarifs sont transparents. Le prix affiché inclut tout ce qui est mentionné dans l\'offre.',
    },
    {
      question: 'Proposez-vous une période d\'essai ?',
      answer: 'Oui, nous offrons 14 jours d\'essai gratuit sur tous nos plans pour tester nos solutions.',
    },
    {
      question: 'Comment fonctionne le paiement ?',
      answer: 'Le paiement est mensuel par carte bancaire ou virement. Pas d\'engagement, résiliable à tout moment.',
    },
    {
      question: 'Que se passe-t-il si je dépasse ma limite de conversations ?',
      answer: 'Nous vous prévenons à 80% de votre limite. Vous pouvez upgrader ou acheter un pack additionnel.',
    },
    {
      question: 'Proposez-vous des réductions pour les associations ?',
      answer: 'Oui, nous offrons des tarifs préférentiels pour les associations et organisations à but non lucratif.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Déploiement rapide',
      description: 'Votre solution IA opérationnelle en moins de 48h',
    },
    {
      icon: Shield,
      title: 'Sécurité garantie',
      description: 'Données cryptées et conformité RGPD assurée',
    },
    {
      icon: Clock,
      title: 'Support réactif',
      description: 'Équipe disponible pour vous accompagner',
    },
    {
      icon: Users,
      title: 'Formation incluse',
      description: 'Formation de vos équipes à l\'utilisation',
    },
  ];

  return (
    <>      
    <Helmet>
  <title>Tarifs Solutions IA - ALINYXE</title>
  <meta name="description" content="Découvrez nos tarifs pour les solutions d'intelligence artificielle. Options flexibles pour tous les besoins." />
  <meta property="og:title" content="Tarifs Solutions IA - ALINYXE" />
  <meta property="og:description" content="Découvrez nos tarifs pour les solutions d'intelligence artificielle. Options flexibles pour tous les besoins." />
  <meta property="og:image" content="https://alinyxe.online/images/sub_logo.jpg" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tarifs Solutions IA - ALINYXE" />
  <meta name="twitter:image" content="https://alinyxe.online/images/sub_logo.jpg" />
</Helmet>

    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Tarifs <span className="text-primary">ALINYXE</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choisissez le plan qui correspond à vos besoins. Pas d'engagement, résiliable à tout moment.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold">14 jours d'essai gratuit sur tous les plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Benefits */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tableau <span className="text-primary">Comparatif</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comparez en détail les fonctionnalités de chaque plan
            </p>
          </div>

          <div className="overflow-x-auto max-w-6xl mx-auto" data-aos="fade-up">
            <table className="table w-full bg-card border border-primary/20 rounded-xl">
              <thead>
                <tr className="bg-card/50 border-b border-primary/20">
                  <th className="text-left text-lg">Fonctionnalité</th>
                  <th className="text-center text-lg">Starter</th>
                  <th className="text-center text-lg text-primary">Professional</th>
                  <th className="text-center text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-primary/10 hover:bg-card/50 transition-colors">
                    <td className="font-semibold">{row.category}</td>
                    <td className="text-center text-muted-foreground">{row.starter}</td>
                    <td className="text-center text-primary font-semibold">{row.professional}</td>
                    <td className="text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions <span className="text-primary">Fréquentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur nos tarifs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="collapse collapse-plus bg-card border border-primary/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-muted-foreground pt-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Commencer avec <span className="text-primary">l'IA</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              14 jours d'essai gratuit, sans engagement, sans carte bancaire requise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary btn-lg">
                Démarrer l'essai gratuit
              </a>
              <a href="/services" className="btn btn-outline btn-lg">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default PricingPage;
