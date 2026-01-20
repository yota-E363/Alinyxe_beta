import { questions } from "@/data/questions";
import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold glow-text mb-12">FAQ Alinyxe</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {questions.map(q => (
            <section key={q.slug} className="p-6 rounded-xl border border-primary/20 bg-card/50 hover-lift">
              <h2 className="text-xl font-bold mb-4">{q.question}</h2>
              <p className="text-muted-foreground">{q.answer}</p>
            </section>
          ))}
        </div>
        <JsonLd data={faqJsonLd} />
      </main>
      <Footer />
    </div>
  );
}