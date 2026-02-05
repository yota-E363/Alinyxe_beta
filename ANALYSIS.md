# Analyse du projet Alinyxe Nexus

## Stack Technique
- **Framework**: Next.js 16.1.1 (App Router)
- **Langage**: TypeScript
- **UI/Styles**:
  - Tailwind CSS 4.0.0
  - DaisyUI 5.5.5
  - Radix UI (composants individuels)
  - Framer Motion
  - Lucide React (icônes)
- **Gestion d'état / Données**:
  - TanStack Query (React Query)
  - React Hook Form + Zod (validation)
- **Autres**:
  - AOS (Animate On Scroll)
  - Spline (@splinetool/react-spline)
  - Recharts

## Structure du Projet
- `app/`: Contient les routes et le layout principal. Utilise l'App Router de Next.js.
- `components/`: Composants réutilisables, avec un sous-dossier `ui/` pour les composants de base (style shadcn/ui).
- `data/`: Fichiers de données statiques (FAQ, questions, etc.).
- `hooks/`: Hooks React personnalisés.
- `lib/`: Utilitaires et configurations (ex: `utils.ts` pour tailwind-merge).
- `public/`: Assets statiques.
- `styles/`: Fichiers CSS globaux.
- `types/`: Définitions de types TypeScript.

## État de la Migration
- La migration de Vite vers Next.js semble terminée selon `TODO-dependencies.md`.
- Les composants Radix UI sont centralisés dans `components/ui/radix.ts`.
- L'optimisation des images avec `next/image` est en place.
- SEO géré via Metadata API dans `layout.tsx` et `page.tsx`.

## Points d'attention
- Utilisation de React 19 et Next 16 (versions très récentes/futures).
- Configuration Tailwind 4 avec PostCSS.
- Importance de `"use client"` pour les composants interactifs.

## Résultats de Vérification
- `npm run build` : Succès. Toutes les routes statiques et dynamiques ont été générées sans erreur.
