import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechCorp',
      content: 'ALINYXE a révolutionné notre service client. Leur chatbot IA gère 80% de nos demandes automatiquement.',
      rating: 5,
      avatar: 'MD',
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Innovation, RetailMax',
      content: 'L\'automatisation intelligente d\'ALINYXE nous a permis de réduire nos coûts de 40% tout en améliorant la qualité.',
      rating: 5,
      avatar: 'PM',
    },
    {
      name: 'Sophie Laurent',
      role: 'CTO, FinanceHub',
      content: 'Les agents IA autonomes développés par ALINYXE ont transformé notre façon de travailler. Résultats exceptionnels.',
      rating: 5,
      avatar: 'SL',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce Que Disent <span className="text-primary">Nos Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction client est notre priorité
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card bg-card border border-primary/20 hover-lift group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="card-body relative z-10">
                <Quote className="w-12 h-12 text-primary opacity-30 mb-4 group-hover:opacity-50 transition-opacity" />
                
                {/* Rating stars with animation */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i + 0.3, type: "spring" as const, stiffness: 200 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author info with avatar */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;