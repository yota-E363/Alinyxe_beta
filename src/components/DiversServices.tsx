import { MessageSquare, Bot, Cpu, Network } from 'lucide-react';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';

const DiversServices = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Chatbots IA Avancés',
      description: 'Chatbots conversationnels intelligents avec compréhension du langage naturel et apprentissage continu.',
      image: img1,
      features: ['Multilingue', 'Contextuel', 'Évolutif'],
    },
    {
      icon: Cpu,
      title: 'Solutions IA Sur Mesure',
      description: 'Développement de solutions IA personnalisées adaptées à vos besoins métier spécifiques.',
      image: img4,
      features: ['Personnalisé', 'Scalable', 'Intégré'],
    },
    {
      icon: Bot,
      title: 'Automatisation Intelligente',
      description: 'Automatisez vos processus avec des systèmes intelligents qui apprennent et s\'améliorent.',
      image: img2,
      features: ['Automatique', 'Intelligent', 'Efficace'],
    },
    {
      icon: Network,
      title: 'Agents IA Autonomes',
      description: 'Agents autonomes capables de prendre des décisions et d\'agir de manière indépendante.',
      image: img3,
      features: ['Autonome', 'Décisionnel', 'Adaptatif'],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions IA complètes pour transformer votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-card border border-primary/20 overflow-hidden hover-lift"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <figure className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-10 h-10 text-primary" />
                  <h3 className="card-title text-2xl">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {service.features.map((feature, i) => (
                    <span key={i} className="badge badge-primary badge-outline">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiversServices;
