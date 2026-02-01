# Analyse du Projet - Alinyxe Nexus

## Stack Technique
- **Framework:** Next.js 16.1.3 (App Router, Turbopack)
- **Langage:** TypeScript
- **UI/Styles:** Tailwind CSS 4.0.0, DaisyUI 5.5.5, Framer Motion, Lucide React
- **Animations:** AOS (Animate On Scroll), Spline (@splinetool/react-spline)
- **Gestion des Formulaires:** React Hook Form + Zod
- **Composants UI:** Radix UI (centralisés dans `components/ui/radix.ts`)
- **Data:** TanStack Query
- **Environnement:** Node 20+, React 19

## Structure des Dossiers
- `/app`: Routes, layouts, et pages (App Router)
- `/components`: Composants réutilisables
- `/components/ui`: Composants de base (Shadcn/Radix)
- `/data`: Données statiques et configurations
- `/hooks`: Hooks React personnalisés
- `/lib`: Utilitaires et fonctions partagées
- `/public`: Assets statiques (images, logos)
- `/styles`: Fichiers CSS (globals.css, animations.css)
- `/types`: Définitions de types TypeScript

## Points Clés de l'Architecture
- **Migration réussie:** Le projet a été migré de Vite vers Next.js.
- **Hydratation:** Utilisation de `suppressHydrationWarning` dans `layout.tsx`.
- **Client Components:** Usage de `"use client"` pour AOS, Spline et hooks.
- **ISR:** Support de la régénération statique incrémentale.
- **SEO:** Metadata API de Next.js.

## État du Projet (Session Actuelle)
- **Dépendances:** Installées avec succès (`--legacy-peer-deps`).
- **Build:** Vérifié et fonctionnel (**SUCCESS**).
- **Linting:** Erreur détectée dans la configuration par défaut de `next lint` (à corriger).
- **Bug Identifié:** Utilisation de `Math.random()` dans `SidebarMenuSkeleton` pouvant causer des désynchronisations d'hydratation.
