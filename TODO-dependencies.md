# TODO Dependencies & Migration Next.js

## Problèmes identifiés
- Projet actuellement sous Vite, doit être migré vers Next.js (App Router). [TERMINÉ]
- Dépendances avec des versions fictives ou anticipées dans `package.json`. [TERMINÉ]
- Incohérences entre imports et structure souhaitée. [TERMINÉ]
- Usage de `react-router-dom` et `react-helmet` incompatibles avec la structure cible. [TERMINÉ]

## Versions de référence (ABSOLUES)
- `next`: ^16.1.1
- `react`: ^19.1.1
- `react-dom`: ^19.1.1
- `@types/react`: ^19.1.1
- `@types/react-dom`: ^19.1.1

## Plan de correction
1. [x] Mise à jour de `package.json` et suppression de Vite/React Router.
2. [x] Configuration de `next.config.js` et `tsconfig.json`.
3. [x] Migration de la structure des dossiers (`src/` vers racine).
4. [x] Création du `layout.tsx` et des pages dans `app/`.
5. [x] Ajout de `"use client"` et remplacement des liens/metadonnées.
6. [x] Centralisation des imports Radix UI dans `components/ui/radix.ts`.
7. [x] Optimisation des images avec `next/image`.
8. [x] Validation par `npm run build`.
