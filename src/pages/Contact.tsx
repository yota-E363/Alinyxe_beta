import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès! Nous vous répondrons sous 24h.', {
      icon: <CheckCircle className="text-primary" />,
    });
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Contactez <span className="text-primary">ALINYXE</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discutons de vos besoins en intelligence artificielle et comment nous pouvons transformer votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8">Informations de <span className="text-primary">Contact</span></h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-primary/20">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@alinyxe.com</p>
                    <p className="text-muted-foreground">support@alinyxe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-primary/20">
                  <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                    <p className="text-sm text-muted-foreground">Lun - Ven : 9h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-primary/20">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresse</h3>
                    <p className="text-muted-foreground">123 Avenue des Champs-Élysées</p>
                    <p className="text-muted-foreground">75008 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Pourquoi Nous Choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Expertise reconnue en IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Solutions personnalisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Support 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>ROI garanti</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <form onSubmit={handleSubmit} className="card bg-card border border-primary/20 p-8">
                <h2 className="text-3xl font-bold mb-8">Envoyez-nous un <span className="text-primary">Message</span></h2>
                
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Nom complet *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@entreprise.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Entreprise</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Votre entreprise"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Téléphone</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Service souhaité *</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="select select-bordered w-full"
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

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet et vos besoins..."
                    className="textarea textarea-bordered w-full h-32"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full gap-2">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
