# Analyse du Projet Alinyxe Nexus

## Vue d'Ensemble
Le projet **Alinyxe Nexus** est une application web moderne de pointe pour des solutions d'Intelligence Artificielle. Construit avec **Next.js 16 (Turbopack)** et **React 19**, il exploite les dernières fonctionnalités du framework pour une performance et une interactivité optimales.

## Pile Technologique détaillée
- **Framework :** Next.js 16.1.3 (Mode Turbopack activé).
- **Bibliothèque UI :** React 19.1.1.
- **Moteur de Style :** Tailwind CSS 4.0.0 (utilisation de `@tailwindcss/postcss`).
- **Composants UI :** DaisyUI 5.5.5 pour les thèmes et composants rapides.
- **Gestion des États & Données :** TanStack Query (^5.83.0).
- **Formulaires :** React Hook Form avec validation Zod.
- **Animations :** AOS (Animate On Scroll) et Framer Motion pour des transitions fluides.
- **Accessibilité :** Radix UI, avec une centralisation des exports dans `components/ui/radix.ts` pour maintenir la propreté des imports.
- **SEO :** Métadonnées dynamiques, `sitemap.ts`, `robots.ts`, et support JSON-LD.

## Architecture du Code
- **App Router :** Utilisation intensive du dossier `app/` pour le routage et les layouts.
- **Composants Client vs Serveur :** Séparation claire, avec l'utilisation de `"use client"` uniquement là où l'interactivité (hooks, effets) est nécessaire.
- **Centralisation Radix :** Tous les composants Radix sont ré-exportés depuis un point unique, facilitant la maintenance.
- **Design System :** Utilisation de Tailwind 4 avec des variables CSS natives pour une personnalisation poussée via `app/globals.css`.

## Analyse de l'État Actuel
- Le projet a été migré avec succès de Vite vers Next.js.
- Les dépendances sont à jour et configurées pour React 19 via des overrides dans `package.json`.
- Le build de production est fonctionnel et optimisé.
- La structure respecte les meilleures pratiques de Next.js (pas de dossier `src`, fichiers à la racine).
