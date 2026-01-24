import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const revalidate = 3600;

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Alinyxe",
    url: "https://alinyxe.online/contact",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold glow-text mb-8 text-center">Contact Alinyxe</h1>
        <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-primary/20 bg-card/50">
          <p className="text-lg text-muted-foreground text-center mb-8">
            Envoyez-nous un message via le formulaire ci-dessous.
          </p>
          <ContactForm />
        </div>
        <JsonLd data={contactJsonLd} />
      </main>
      <Footer />
    </div>
  );
}