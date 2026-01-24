# Alinyxe Nexus - Project Analysis

## Overview
**Alinyxe Nexus** is a modern web application dedicated to AI solutions, including chatbots, automation, and autonomous agents. The project has been recently migrated from Vite to Next.js (App Router) to benefit from better SEO, SSR, and ISR.

## Technical Stack
- **Framework:** Next.js 16.1.3 (App Router)
- **Frontend Library:** React 19.1.1
- **Styling:** Tailwind CSS 4.0.0 (PostCSS)
- **Components:** Radix UI, Framer Motion, AOS, Lucide React, DaisyUI
- **3D Graphics:** @splinetool/react-spline
- **Deployment:** Docker-ready, optimized for Render

## Directory Structure
- `app/`: Main routes and layout (Accueil, Services, Pricing, Contact, FAQ, etc.)
- `components/`: Reusable UI components
  - `ui/`: Fundamental UI elements (buttons, inputs, etc. based on Radix UI)
- `data/`: Centralized content management
- `hooks/` & `lib/`: Custom hooks and utility functions
- `public/`: Static assets and SEO files
- `styles/`: Global CSS and animations

## Key Features
- **Responsive Design:** Mobile-first approach with Tailwind.
- **SEO & Performance:** Optimized Metadata API, JSON-LD, Sitemap, and Robots.txt.
- **Dynamic Content:** Uses ISR (Incremental Static Regeneration) for content pages.
- **3D Integration:** Hero section features interactive Spline scenes.

## Current Health
- **Build Status:** Passing (`npm run build` verified)
- **Lint Status:** Issues identified (config mismatch between Vite and Next.js)
- **Dependencies:** Standardized on React 19 and Next.js 16
- **Architecture:** Clean separation of concerns between data, components, and pages.

## Recommendations
1. **Interactivity:** Some forms (e.g., Contact) are currently static and need client-side state handling.
2. **Component Reusability:** Ensure all Radix components are imported via the centralized `components/ui/radix.ts` where possible.
3. **Asset Management:** Continue using `next/image` for all images to ensure optimal loading performance.
