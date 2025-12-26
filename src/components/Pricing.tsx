import { Check, X, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '2 490',
      period: '/mois',
      description: 'Parfait pour démarrer avec l\'IA',
      popular: false,
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
      price: '6 990',
      period: '/mois',
      description: 'Pour les entreprises en croissance',
      popular: true,
      features: [
        { name: 'Chatbot IA avancé', included: true },
        { name: 'Jusqu\'à 10 000 conversations/mois', included: true },
        { name: 'Support prioritaire 24/7', included: true },
        { name: 'Multi-canal (Web, Mobile, Social)', included: true },
        { name: 'Analytiques avancées + BI', included: true },
        { name: 'Formation complète (8h)', included: true },
        { name: 'Personnalisation avancée', included: true },
        { name: 'Automatisation intelligente', included: true },
        { name: 'Agent autonome', included: false },
        { name: 'API personnalisée', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      description: 'Solutions IA complètes et personnalisées',
      popular: false,
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
        { name: 'API personnalisée + Webhooks', included: true },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tarifs <span className="text-primary">Transparents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions adaptées à chaque besoin, de la startup à l'entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-card border-2 ${
                plan.popular ? 'border-primary scale-105' : 'border-primary/20'
              } relative hover-lift`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="badge badge-primary gap-1 py-4 px-4">
                    <Zap size={16} />
                    Plus populaire
                  </div>
                </div>
              )}
              
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'Sur mesure' ? (
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                <a
                  href="/contact"
                  className={`btn w-full mb-6 ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.price === 'Sur mesure' ? 'Nous contacter' : 'Commencer'}
                </a>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-muted-foreground mb-4">
            Tous nos plans incluent : Mise en place gratuite · Mises à jour continues · Sécurité renforcée
          </p>
          <a href="/contact" className="link link-primary">
            Besoin d'aide pour choisir ? Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
