# Analyse du Projet - Alinyxe Nexus

## Vue d'ensemble
Le projet **Alinyxe Nexus** est une application web moderne développée avec **Next.js 16** et **React 19**. Il s'agit d'une plateforme pour une agence spécialisée en Intelligence Artificielle (chatbots, automatisation, agents autonomes).

## Architecture Technique
- **Framework:** Next.js 16.1.1 (App Router)
- **Bibliothèque UI:** React 19.1.1
- **Stylisation:**
  - Tailwind CSS 4.0.0
  - DaisyUI 5.5.5
  - Tailwind Animate
- **Composants:**
  - Radix UI (système de design robuste, imports centralisés dans `components/ui/radix.ts`)
  - Lucide React (icônes)
  - Framer Motion (animations fluides)
  - AOS (Animate On Scroll)
  - Spline (intégration 3D via @splinetool/react-spline)
- **Gestion des données & formulaires:**
  - React Hook Form + Zod (validation)
  - TanStack Query (gestion d'état asynchrone)
- **SEO & Performance:**
  - Metadata API de Next.js
  - Sitemap et Robots.ts dynamiques
  - JSON-LD pour les données structurées
  - ISR (Incremental Static Regeneration) avec revalidation on-demand

## Structure des Dossiers
- `/app`: Cœur de l'application (Pages, Layouts, API, Globals CSS)
- `/components`: Composants réutilisables (About, CTA, Navbar, etc.)
- `/components/ui`: Composants atomiques (Radix, Shadcn-like)
- `/data`: Données statiques (FAQ, Services, etc.)
- `/hooks`: Hooks React personnalisés (use-mobile, use-toast)
- `/lib`: Utilitaires (utils.ts)
- `/public`: Assets statiques (images, logos, favicon)
- `/styles`: Dossier conservé pour d'éventuels styles additionnels (bien que `app/globals.css` soit le point d'entrée principal)

## État actuel
La migration de Vite vers Next.js est terminée. Le projet utilise les dernières versions de React (19) et Next.js (16). La configuration ESLint ignore `.next`. Le projet est prêt pour le déploiement sur Render (Dockerfile présent).
