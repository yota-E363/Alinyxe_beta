import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Prêt à Révolutionner Votre <span className="text-primary">Entreprise</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez les centaines d'entreprises qui ont déjà transformé leur activité avec l'IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary btn-lg gap-2">
              Commencer maintenant
              <ArrowRight size={20} />
            </a>
            <a href="/services" className="btn btn-outline btn-lg">
              Explorer nos solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
