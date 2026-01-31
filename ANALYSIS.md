# Analyse du Projet - Alinyxe Nexus

## 1. Vue d'Ensemble
Alinyxe Nexus est un site web professionnel moderne spécialisé dans les solutions d'intelligence artificielle (chatbots, automatisation, agents autonomes). Le projet a été migré d'une architecture Vite vers **Next.js (App Router)**.

## 2. Pile Technique
- **Framework**: Next.js 16.1.3 (Turbopack activé par défaut)
- **Bibliothèque**: React 19.1.1
- **Stylisation**:
  - Tailwind CSS 4.0.0
  - DaisyUI 5.5.5
  - AOS (Animate On Scroll) 2.3.4
  - Framer Motion 12.23.26
- **Composants UI**:
  - Radix UI (importations centralisées dans `components/ui/radix.ts`)
  - Lucide React pour les icônes
- **Gestion de Données**: TanStack Query (^5.83.0)
- **Formulaires**: React Hook Form avec validation Zod
- **Animations 3D**: Spline (@splinetool/react-spline)

## 3. Architecture du Projet
Le projet suit la structure standard de Next.js App Router :
- `app/`: Pages, layouts, et routes API.
- `components/`: Composants réutilisables (UI et sections de page).
- `data/`: Données statiques et contenu (FAQs, produits).
- `hooks/`: Hooks React personnalisés.
- `lib/`: Utilitaires et configurations partagées.
- `public/`: Actifs statiques (images, logos).
- `styles/`: CSS global et animations.
- `types/`: Définitions TypeScript.

## 4. État Actuel et Observations
- **Migration**: La migration vers l'App Router est terminée et fonctionnelle.
- **Performance**: Utilisation de l'ISR (Incremental Static Regeneration) avec un délai de revalidation de 3600s (1h) pour les pages de produits et de documentation.
- **SEO**: Utilisation de la Metadata API de Next.js pour le SEO dynamique. Génération automatique de `sitemap.ts` et `robots.ts`.
- **Compatibilité**: Le projet utilise des versions très récentes (voire anticipées) de Next.js et React, nécessitant l'utilisation de `--legacy-peer-deps` pour l'installation des dépendances.
- **Build**: Le projet compile avec succès via `npm run build`.

## 5. Recommandations
- Assurer la configuration `output: 'standalone'` dans `next.config.js` pour l'optimisation Docker/Production.
- Continuer à utiliser `next/image` pour l'optimisation des images chargées depuis `public/`.
- Maintenir la centralisation des imports Radix pour éviter la dispersion.
