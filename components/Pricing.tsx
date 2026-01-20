import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '100',
      period: '/mois',
      description: 'Parfait pour démarrer avec l\'IA',
      popular: false,
      featured: false,
      icon: Rocket,
      gradient: 'from-muted/50 to-muted/30',
      features: [
        { name: 'Chatbot IA basique', included: true },
        { name: 'Jusqu\'à 1 000 conversations/mois', included: true },
        { name: 'Support par email', included: true },
        { name: 'Intégration web', included: true },
        { name: 'Analytiques de base', included: true },
        { name: 'Formation initiale (2h)', included: true },
        { name: 'Personnalisation avancée', included: false },
        { name: 'Multi-canal', included: false },
        { name: 'Agent autonome', included: false },
        { name: 'API personnalisée', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '100',
      period: '/mois',
      description: 'Pour les entreprises en croissance',
      popular: true,
      featured: true,
      icon: Crown,
      gradient: 'from-primary/20 to-secondary/20',
      features: [
        { name: 'Chatbot IA avancé', included: true },
        { name: 'Jusqu\'à 10 000 conversations/mois', included: true },
        { name: 'Support prioritaire 24/7', included: true },
        { name: 'Service client plus rapide et reactif', included: true },
        { name: 'Reduction du temps de traitement des Emails', included: true },
        { name: 'Amemioration de l\'image de marque par la reactivité', included: true },
        { name: 'Automatisation intelligente', included: true },
        { name: 'Agent autonome', included: false },
        { name: 'Meuilleur gestion du volume d\'Emails entrants', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      description: 'Solutions IA complètes et personnalisées',
      popular: false,
      featured: false,
      icon: Zap,
      gradient: 'from-secondary/10 to-accent/10',
      features: [
        { name: 'Solution IA sur mesure', included: true },
        { name: 'Conversations illimitées', included: true },
        { name: 'Support dédié 24/7 + Manager', included: true },
        { name: 'Tous canaux + Intégrations custom', included: true },
        { name: 'Analytics personnalisées + Rapports', included: true },
        { name: 'Formation illimitée + Accompagnement', included: true },
        { name: 'Personnalisation complète', included: true },
        { name: 'Automatisation avancée', included: true },
        { name: 'Agents autonomes multiples', included: true },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Tarifs <span className="text-primary">Transparents</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Des solutions adaptées à chaque besoin, de la startup à l'entreprise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${plan.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Card */}
                <div
                  className={`card bg-gradient-to-br ${plan.gradient} border-2 relative overflow-hidden transition-all duration-300 ${
                    plan.featured 
                      ? 'border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)] lg:scale-105' 
                      : 'border-primary/20 hover:border-primary/40'
                  } hover-lift`}
                >
                  {/* Border Beam for featured plan */}
                  {plan.featured && (
                    <BorderBeam 
                      size={200} 
                      duration={10} 
                      delay={0}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--secondary))"
                    />
                  )}

                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="badge bg-gradient-to-r from-primary to-secondary text-primary-foreground gap-1 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm border-0 shadow-lg">
                        <Crown size={14} className="sm:w-4 sm:h-4" />
                        Plus populaire
                      </div>
                    </div>
                  )}
                  
                  <div className="card-body p-4 sm:p-6 relative">
                    {/* Plan icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 ${
                      plan.featured 
                        ? 'bg-gradient-to-br from-primary to-secondary' 
                        : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${
                        plan.featured ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">{plan.description}</p>
                    
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                        {plan.price === 'Sur mesure' ? (
                          <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                            plan.featured ? 'text-primary' : 'text-foreground'
                          }`}>{plan.price}</span>
                        ) : (
                          <>
                            <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                              plan.featured 
                                ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' 
                                : 'text-foreground'
                            }`}>{plan.price}€</span>
                            <span className="text-muted-foreground text-sm sm:text-base">{plan.period}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className={`btn w-full mb-4 sm:mb-6 text-sm sm:text-base relative overflow-hidden group/btn ${
                        plan.featured 
                          ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]' 
                          : plan.popular 
                            ? 'btn-primary' 
                            : 'btn-outline hover:btn-primary'
                      }`}
                    >
                      <span className="relative z-10">
                        {plan.price === 'Sur mesure' ? 'Nous contacter' : 'Commencer'}
                      </span>
                    </a>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4 sm:mb-6" />

                    <div className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, i) => (
                        <div 
                          key={i} 
                          className={`flex items-start gap-2 sm:gap-3 transition-opacity ${
                            !feature.included ? 'opacity-50' : ''
                          }`}
                        >
                          {feature.included ? (
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.featured ? 'bg-primary/20' : 'bg-primary/10'
                            }`}>
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-muted/50">
                              <X className="w-3 h-3 text-muted-foreground" />
                            </div>
                          )}
                          <span className={`text-xs sm:text-sm md:text-base ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
                          }`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4" data-aos="fade-up">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card/50 border border-primary/10 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm sm:text-base">Mise en place gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm sm:text-base">Mises à jour continues</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm sm:text-base">Sécurité renforcée</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            <a href="/contact" className="link link-primary">
              Besoin d'aide pour choisir ? Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;