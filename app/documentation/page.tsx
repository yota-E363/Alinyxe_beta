import { questions } from "@/data/questions";
import { enSavoir } from "@/data/enSavoir";
import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function DocumentationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...questions, ...enSavoir].map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold glow-text mb-12">Documentation Alinyxe</h1>
        <div className="space-y-12">
          {[...questions, ...enSavoir].map(q => (
            <section key={q.slug} className="p-6 rounded-xl border border-primary/20 bg-card/50">
              <h2 className="text-2xl font-bold mb-4 text-primary">{q.question}</h2>
              <p className="text-muted-foreground leading-relaxed">{q.answer}</p>
            </section>
          ))}
        </div>
        <JsonLd data={faqJsonLd} />
      </main>
      <Footer />
    </div>
  );
}