# ALINYXE - Solutions d'Intelligence Artificielle

Ce projet est le site vitrine d'ALINYXE, expert en solutions d'intelligence artificielle avancées.

## Technologies Utilisées

- **Framework**: [Next.js 16.1.3](https://nextjs.org/) (App Router)
- **React**: 19.1.1
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **3D**: [Spline](https://spline.design/)
- **Gestion d'état**: [TanStack Query](https://tanstack.com/query/latest)
- **Formulaires**: React Hook Form, Zod

## Structure du Projet

- `app/`: Routes et composants de page (App Router).
- `components/`: Composants réutilisables.
- `data/`: Contenu statique du site.
- `hooks/`: Hooks personnalisés.
- `lib/`: Utilitaires et configurations.
- `public/`: Assets statiques.
- `styles/`: Styles globaux et animations.
- `types/`: Définitions TypeScript.

## Installation et Lancement

1.  Installer les dépendances :
    ```bash
    npm install --legacy-peer-deps
    ```
2.  Lancer le serveur de développement :
    ```bash
    npm run dev
    ```
3.  Construire pour la production :
    ```bash
    npm run build
    ```

## Déploiement

Le projet est optimisé pour un déploiement sur Vercel ou via Docker (voir `next.config.js` pour la configuration `standalone`).
