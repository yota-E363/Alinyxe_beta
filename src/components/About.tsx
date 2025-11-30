import { Brain, Zap, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Avancée',
      description: 'Technologies de pointe en intelligence artificielle et machine learning pour des solutions performantes.',
    },
    {
      icon: Zap,
      title: 'Automatisation',
      description: 'Automatisez vos processus métier et gagnez en efficacité avec nos agents intelligents.',
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Sécurité et confidentialité garanties pour toutes vos données et interactions.',
    },
    {
      icon: Sparkles,
      title: 'Sur Mesure',
      description: 'Solutions personnalisées adaptées à vos besoins spécifiques et votre secteur.',
    },
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Pourquoi <span className="text-primary">ALINYXE</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous transformons votre entreprise avec l'intelligence artificielle la plus avancée
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-background border border-primary/20 hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body items-center text-center">
                <feature.icon className="w-16 h-16 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="card-title text-2xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
