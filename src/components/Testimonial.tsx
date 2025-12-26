import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechCorp',
      content: 'ALINYXE a révolutionné notre service client. Leur chatbot IA gère 80% de nos demandes automatiquement.',
      rating: 5,
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Innovation, RetailMax',
      content: 'L\'automatisation intelligente d\'ALINYXE nous a permis de réduire nos coûts de 40% tout en améliorant la qualité.',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      role: 'CTO, FinanceHub',
      content: 'Les agents IA autonomes développés par ALINYXE ont transformé notre façon de travailler. Résultats exceptionnels.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce Que Disent <span className="text-primary">Nos Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction client est notre priorité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-card border border-primary/20 hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body">
                <Quote className="w-12 h-12 text-primary opacity-50 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
