import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <div className="space-y-4">
            <input type="text" placeholder="Nom" className="w-full p-4 rounded-xl bg-background border border-primary/10" />
            <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-background border border-primary/10" />
            <textarea placeholder="Message" rows={4} className="w-full p-4 rounded-xl bg-background border border-primary/10" />
            <button className="w-full btn btn-primary py-4 rounded-xl font-bold transition-all">Envoyer</button>
          </div>
        </div>
        <JsonLd data={contactJsonLd} />
      </main>
      <Footer />
    </div>
  );
}