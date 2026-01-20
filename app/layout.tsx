import { Providers } from "./Providers";
import "./globals.css";
import "@/styles/animations.css";
import { Metadata } from "next";

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
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}