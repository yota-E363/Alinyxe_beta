import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services IA - ALINYXE | Chatbots Intelligents & Automatisation",
  description: "Nos services IA : chatbots intelligents personnalisés, automatisation des processus, agents autonomes, intégration API. Solutions sur mesure pour votre entreprise.",
  keywords: ["chatbot intelligent", "automatisation ia", "agents autonomes", "développement chatbot", "solutions ia sur mesure"],
  openGraph: {
    title: "Services IA - ALINYXE",
    description: "Chatbots intelligents, automatisation IA et agents autonomes sur mesure.",
    url: "https://alinyxe.online/services",
    images: ["https://i.postimg.cc/PxDzdHpT/Hitube_0OF6eo4h_Mq_2025_12_03_18_15_00.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services IA - ALINYXE",
    images: ["https://i.postimg.cc/PxDzdHpT/Hitube_0OF6eo4h_Mq_2025_12_03_18_15_00.jpg"],
  },
};

export default function Page() {
  return <ServicesClient />;
}