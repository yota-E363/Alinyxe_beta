import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { BorderBeam } from '@/components/ui/border-beam';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Message envoyé avec succès! Nous vous répondrons sous 24h.', {
      icon: <CheckCircle className="text-primary" />,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  };

  return (
    <>     
    <Helmet>
  <title>Contact ALINYXE - Solutions IA</title>
  <meta name="description" content="Contactez ALINYXE pour vos projets d'intelligence artificielle. Notre équipe est à votre écoute pour répondre à vos questions." />
  <meta property="og:title" content="Contact ALINYXE - Solutions IA" />
  <meta property="og:description" content="Contactez ALINYXE pour vos projets d'intelligence artificielle. Notre équipe est à votre écoute pour répondre à vos questions." />
  <meta property="og:image" content="https://alinyxe.online/images/sub_logo.jpg" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact ALINYXE" />
  <meta name="twitter:image" content="https://alinyxe.online/images/sub_logo.jpg" />
        {/* Structured Data - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact ALINYXE",
            "description": "Contactez-nous pour votre projet IA",
            "url": "https://alinyxe.online/contact"
          })}
        </script>
      </Helmet>
  
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 glow-text">
              Contactez <span className="text-primary">ALINYXE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Discutons de vos besoins en intelligence artificielle et comment nous pouvons transformer votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-auto grid lg:grid-cols-2 gap-8 items-center justify-between  sm:gap-10 lg:gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Informations de <span className="text-primary">Contact</span></h2>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">contact@alinyxe.com</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">support@alinyxe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-1">Téléphone</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">+33 1 23 45 67 89</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Lun - Ven : 9h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">123 Avenue des Champs-Élysées</p>
                    <p className="text-muted-foreground text-sm sm:text-base">75008 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="p-5 mb-5 sm:p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pourquoi Nous Choisir ?</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Expertise reconnue en IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Solutions personnalisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Support 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">ROI garanti</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form / Thank You */}
            <div data-aos="fade-left" className=" w-full min-w-0">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="card bg-card border border-primary/20 p-5 sm:p-6 md:p-8 w-full"
                    style={{ transformOrigin: 'right center' }}
                    initial={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0, width: isMobile ? '100%' : '50%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Envoyez-nous un <span className="text-primary">Message</span></h2>
                    
                    <div className="form-control  mb-4 sm:mb-6">
                      <label className="label">
                        <span className="label-text text-sm sm:text-base">Nom complet *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="input bg-slate-800 input-bordered w-full text-sm sm:textbase"
                        required
                      />
                    </div>

                    <div className="form-control mb-4 sm:mb-6">
                      <label className="label">
                        <span className="label-text text-sm sm:text-base">Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@entreprise.com"
                        className="input bg-slate-800  input-bordered w-full text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-sm sm:text-base">Entreprise</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Votre entreprise"
                          className="input bg-slate-800  input-bordered w-full text-sm sm:text-base"
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-sm sm:text-base">Téléphone</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 12 34 56 78"
                          className="input bg-slate-800  input-bordered w-full text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="form-control mb-4 sm:mb-6">
                      <label className="label">
                        <span className="label-text text-sm sm:text-base">Service souhaité *</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="select bg-slate-800 select-bordered w-full text-sm sm:text-base"
                        required
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="chatbot">Chatbots IA Avancés</option>
                        <option value="custom">Solutions IA Sur Mesure</option>
                        <option value="automation">Automatisation Intelligente</option>
                        <option value="agents">Agents IA Autonomes</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <div className="form-control mb-4 sm:mb-6">
                      <label className="label">
                        <span className="label-text text-sm sm:text-base">Message *</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet et vos besoins..."
                        className="textarea bg-slate-800  textarea-bordered w-full h-28 sm:h-32 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full gap-2 text-sm sm:text-base">
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      Envoyer le message
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-2xl p-1 w-full min-w-0"
                  >
                    {/* Border Beam Effect */}
                    <BorderBeam
                      size={250}
                      duration={12}
                      delay={0}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--secondary))"
                    />
                    
                    {/* Animated Gradient Background */}
                    <div className="relative rounded-xl overflow-hidden">
                      <AnimatedGradient
                        className="opacity-30"
                        speed={2}
                        blur="2xl"
                      />
                      
                      {/* Content */}
                      <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-8 sm:p-12 text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                        >
                          <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
                        </motion.div>
                        
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
                        >
                          Merci !
                        </motion.h2>
                        
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg sm:text-xl text-muted-foreground mb-8"
                        >
                          Votre message a été envoyé avec succès.<br />
                          Notre équipe vous répondra sous 24h.
                        </motion.p>
                        
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          onClick={resetForm}
                          className="btn btn-outline btn-primary"
                        >
                          Envoyer un autre message
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>  
  );
};

export default Contact;