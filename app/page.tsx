import { Metadata } from "next";
import AccueilClient from "./AccueilClient";

export const metadata: Metadata = {
  title: "ALINYXE - Solutions d'Intelligence Artificielle | Chatbots IA & Automatisation",
  description: "ALINYXE, expert en intelligence artificielle : chatbots IA avancés, automatisation intelligente, agents autonomes. Transformez votre entreprise avec nos solutions IA sur mesure.",
  keywords: ["alinyxe", "chatbot ia", "intelligence artificielle", "automatisation ia", "agents autonomes", "solutions ia entreprise", "service Alinyxe", "aide agents", "solution aux probles de gestion"],
  openGraph: {
    title: "ALINYXE - Solutions d'Intelligence Artificielle Avancées",
    description: "Expert en chatbots IA, automatisation et agents autonomes pour transformer votre entreprise.",
    type: "website",
    url: "https://alinyxe.online/",
    images: [
      {
        url: "https://alinyxe.online/images/banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALINYXE - Solutions IA Avancées",
    description: "Chatbots intelligents, automatisation IA et agents autonomes.",
    images: ["https://alinyxe.online/images/banner.jpg"],
    site: "@ALINYXE",
  },
};

export default function Page() {
  return <AccueilClient />;
}