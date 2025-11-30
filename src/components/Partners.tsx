import { Building2 } from 'lucide-react';

const Partners = () => {
  const partners = [
    'TechCorp', 'InnovateLab', 'FutureSystems', 'DataDrive',
    'CloudFirst', 'SmartAI', 'NextGen', 'DigitalEdge',
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Ils nous font <span className="text-primary">confiance</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Building2 className="w-6 h-6" />
                <span className="font-semibold">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
