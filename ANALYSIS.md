# Analyse du projet ALINYXE-NEXUS

## Structure Globale
Le projet est une application Next.js utilisant l'App Router, migrée depuis Vite.
- **Framework**: Next.js 16.1.1 (anticipé/expérimental)
- **Bibliothèque UI**: React 19.1.1
- **Stylisation**: Tailwind CSS 4.0.0, DaisyUI 5.5.5
- **Animations**: AOS, Framer Motion
- **Gestion d'état/Données**: TanStack Query (React Query)
- **Formulaires**: React Hook Form + Zod

## Organisation des dossiers
- `app/`: Contient les routes, layouts et composants serveurs (App Router).
- `components/`: Composants réutilisables, incluant `ui/` pour les composants Radix/Shadcn.
- `data/`: Données statiques (questions, services, etc.).
- `hooks/`: Hooks personnalisés.
- `lib/`: Utilitaires et configurations.
- `public/`: Assets statiques (images, logos).
- `styles/`: Fichiers CSS globaux.
- `types/`: Définitions de types TypeScript.

## État actuel (Optimisé)
- La migration de Vite vers Next.js est terminée et stabilisée.
- **Optimisation des performances**:
  - Remplacement des balises `<img>` par `next/image` pour un meilleur chargement des assets (Navbar, Footer, DiversServices).
  - Remplacement des balises `<a>` par `next/link` pour une navigation instantanée (Hero, CTA, Pricing).
- **Correctifs d'environnement**:
  - Installation et configuration complète d'ESLint pour React 19.
  - Correction de l'erreur `Math.random()` dans `sidebar.tsx` provoquant des instabilités au rendu.
  - Migration de `require()` vers les imports ESM dans `tailwind.config.ts`.
- **Qualité du code**: Tous les types TypeScript vides ont été convertis en alias de type pour respecter les règles ESLint.

## Points d'attention
- Utilisation de versions très récentes/expérimentales (Next 16, React 19, Tailwind 4).
- Les avertissements de Fast Refresh dans les pages sont normaux car elles exportent des constantes (Metadata) en plus du composant par défaut.
