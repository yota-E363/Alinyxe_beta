import { questions } from "@/data/questions";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export async function generateStaticParams() {
  return questions.map(q => ({ slug: q.slug }));
}

export default async function ProduitPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const item = questions.find(q => q.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold glow-text mb-8">{item.question}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{item.answer}</p>
      </main>
      <Footer />
    </div>
  );
}