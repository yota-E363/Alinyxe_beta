# Projet Analysis: alinyxe-nexus

## Informations Générales
- **Nom du projet**: alinyxe-nexus
- **Framework**: Next.js 16.1.3 (App Router)
- **React**: 19.1.1
- **Langage**: TypeScript
- **Gestionnaire de paquets**: npm (avec bun.lockb présent, mais package-lock.json aussi)

## Architecture du Projet
Le projet suit la structure standard de Next.js App Router :
- `app/`: Contient les routes, layouts et composants de page.
- `components/`: Composants réutilisables (UI, Layout, Sections).
- `data/`: Données statiques pour le contenu (questions, services, etc.).
- `hooks/`: Hooks React personnalisés.
- `lib/`: Utilitaires et configurations.
- `public/`: Assets statiques (images, robots.txt, sitemap).
- `styles/`: Fichiers CSS globaux et animations.
- `types/`: Définitions de types TypeScript.

## Technologies Clés
- **Styling**: Tailwind CSS 4.0, DaisyUI, Framer Motion, AOS.
- **UI Components**: Radix UI (importés individuellement via `components/ui`).
- **3D**: Spline (@splinetool/react-spline).
- **Formulaires**: React Hook Form, Zod.
- **Fetching**: TanStack Query (React Query).
- **Icônes**: Lucide React.

## Configuration Notable
- `next.config.js`: Configuration des patterns distants pour les images (alinyxe.online).
- `tailwind.config.ts`: Configuration Tailwind (même si Tailwind 4 est mentionné dans les dépendances).
- `Providers.tsx`: Enveloppe l'application avec les providers nécessaires (probablement ThemeProvider, QueryClientProvider).

## État actuel
Le projet semble être un site vitrine pour "ALINYXE", expert en solutions d'IA. Il contient des sections pour les services, les témoignages, les tarifs et une FAQ.
