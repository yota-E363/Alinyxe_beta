# Projet Analysis: ALINYXE Nexus

## Aperçu du Projet
Le projet est un site web moderne construit avec **Next.js (App Router)** et **React 19**. Il s'agit d'une plateforme pour **ALINYXE**, une entreprise spécialisée dans les solutions d'intelligence artificielle (chatbots, automatisation, agents autonomes).

## Architecture Technique
- **Framework:** Next.js ^16.1.1 (Experimental/Recent version)
- **Library UI:** React ^19.1.1
- **Styling:** Tailwind CSS 4.0.0 avec DaisyUI 5.5.5
- **Animations:** AOS (Animate On Scroll), Framer Motion
- **Composants UI:** Basés sur Radix UI (Shadcn-like structure)
- **Gestion d'État / Data Fetching:** TanStack Query (React Query)
- **Formulaires:** React Hook Form avec Zod

## Structure des Fichiers
- `app/`: Contient les routes, layouts et providers. Architecture App Router.
- `components/`:
  - `ui/`: Composants de base (boutons, inputs, etc.) centralisés.
  - Composants de section (`HeroSpline.tsx`, `About.tsx`, etc.).
- `data/`: Données statiques (`questions.ts`, `enSavoir.ts`).
- `lib/`: Utilitaires (`utils.ts`) et définitions de liens (`links.ts`).
- `public/`: Assets statiques (images, favicons).
- `styles/`: CSS global et animations.

## Observations et Points Clés
- **React 19 & Next.js 16:** Utilisation de versions très récentes. Nécessite `--legacy-peer-deps` pour l'installation des dépendances en raison de conflits de versions avec certains packages tiers.
- **Tailwind CSS 4:** Configuration via `@theme` dans `globals.css` et support de DaisyUI via `tailwind.config.ts`.
- **Interactivité:** Les composants interactifs utilisent la directive `"use client"`.
- **Performance:** Utilisation de Spline pour des éléments 3D (`HeroSpline.tsx`).

## État Actuel
Le projet a été migré de Vite vers Next.js. La structure est propre et suit les meilleures pratiques actuelles de l'écosystème Next.js.
