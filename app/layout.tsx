import { Providers } from "./Providers";
import "./globals.css";
import "@/styles/animations.css";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "ALINYXE - Solutions d'Intelligence Artificielle",
  description: "Expert en intelligence artificielle : chatbots IA avancés, automatisation intelligente, agents autonomes.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ALINYXE",
    "url": "https://alinyxe.online/",
    "description": "Expert en intelligence artificielle : chatbots IA avancés, automatisation intelligente, agents autonomes.",
    "publisher": {
      "@type": "Organization",
      "name": "ALINYXE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alinyxe.online/assets/logo.png"
      }
    }
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}