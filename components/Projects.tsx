import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce IA',
      category: 'Chatbot & Recommandation',
      description: 'Assistant virtuel intelligent pour boutique en ligne avec recommandations personnalisées.',
      results: '+150% conversions',
      color: 'primary',
    },
    {
      title: 'Support Client Automatisé',
      category: 'Automatisation',
      description: 'Système de support client IA réduisant le temps de réponse de 85%.',
      results: '85% temps réduit',
      color: 'secondary',
    },
    {
      title: 'Analyse Prédictive',
      category: 'Agent Autonome',
      description: 'Agent IA pour analyse prédictive et prise de décision automatisée.',
      results: '99.2% précision',
      color: 'accent',
    },
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="text-primary">Réussis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous avons transformé des entreprises avec l'IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-background border border-primary/20 hover-lift"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="card-body">
                <div className={`badge badge-${project.color} mb-4`}>{project.category}</div>
                <h3 className="card-title text-2xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="divider" />
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{project.results}</span>
                  <ArrowRight className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
