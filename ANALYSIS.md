# Analyse du Projet - ALINYXE Nexus

## Vue d'ensemble
Le projet **ALINYXE Nexus** est une application web moderne construite avec **Next.js 16+** (App Router) et **React 19**. Il s'agit d'une plateforme présentant des solutions d'Intelligence Artificielle (chatbots, automatisation, agents autonomes).

## Pile Technologique
- **Framework**: Next.js 16.1.3 (avec support Turbopack)
- **Langage**: TypeScript 5.8
- **UI/Styling**:
  - Tailwind CSS 4.0
  - DaisyUI 5.5
  - Framer Motion (animations)
  - Lucide React (icônes)
  - Radix UI (composants accessibles)
- **Gestion des Données**: TanStack Query (^5.83)
- **Formulaires**: React Hook Form avec validation Zod
- **Animations**: AOS (Animate On Scroll)

## Structure du Projet
- `/app`: Dossier principal pour l'App Router (Next.js). Contient les pages, le layout global et les fichiers de configuration SEO (sitemap.ts, robots.ts).
- `/components`: Composants React réutilisables.
  - `/ui`: Composants atomiques (Radix, Shadcn-like).
- `/data`: Données statiques pour alimenter les pages dynamiques.
- `/hooks`: Hooks React personnalisés.
- `/lib`: Utilitaires et constantes.
- `/public`: Actifs statiques (images, favicons).
- `/styles`: Fichiers CSS globaux et animations spécifiques.

## État Actuel du Projet
- **Migration**: La migration depuis Vite vers Next.js est terminée.
- **Build**: Le projet compile avec succès via `npm run build`.
- **Linting**: Une incohérence a été détectée dans la configuration de linting (à corriger).
- **SEO**: Présence de métadonnées, robots.txt et sitemap.ts. L'utilisation du JSON-LD peut être optimisée.
- **Images**: Certaines images utilisent encore des balises `<img>` standards au lieu de `next/image`.

## Recommandations d'Expert
1. Corriger la commande de linting dans `package.json`.
2. Migrer toutes les balises `<img>` vers `next/image` pour une meilleure performance.
3. Centraliser et enrichir les données structurées (JSON-LD) dans le layout global.
4. Assurer la cohérence des chemins d'actifs vers `/assets/`.
