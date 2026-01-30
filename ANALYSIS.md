# Project Analysis: Alinyxe Nexus

## Project Overview
Alinyxe Nexus is a modern web application built with **Next.js 16** and **React 19**. It features a robust tech stack designed for performance, scalability, and high-quality UI/UX.

## Technology Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Library:** React 19.1.1
- **Styling:**
  - Tailwind CSS 4.0.0
  - DaisyUI 5.5.5
  - Tailwind Animate
- **UI Components:**
  - Radix UI (Individually imported)
  - Lucide React (Icons)
  - Embla Carousel
- **Animations:**
  - Framer Motion
  - AOS (Animate On Scroll)
- **State Management & Data Fetching:**
  - TanStack Query (React Query)
- **Forms & Validation:**
  - React Hook Form
  - Zod
- **3D Integration:**
  - Spline (`@splinetool/react-spline`)
- **SEO & Analytics:**
  - Next.js Metadata API
  - Google Analytics (react-ga4)
  - Custom Sitemap & Robots.ts
  - JSON-LD Structured Data

## Architecture
- `app/`: Contains the main routes, layouts, and global styles. Implements the Next.js App Router.
- `components/`: Contains reusable UI components and page sections.
- `data/`: Centralized storage for static content and configuration.
- `hooks/`: Custom React hooks for shared logic.
- `lib/`: Utility functions, constants, and shared configurations.
- `public/`: Static assets (images, logos, etc.).
- `styles/`: Global CSS and Tailwind configurations.
- `types/`: TypeScript interfaces and types.

## Key Features
- **Responsive Design:** Mobile-first approach using Tailwind CSS.
- **Dynamic Routing:** Utilizes Next.js App Router for efficient navigation.
- **Interactive UI:** High-performance animations and 3D elements.
- **SEO Optimized:** Comprehensive metadata, sitemaps, and structured data.
- **Accessibility:** Built with accessible Radix UI primitives.

## Configuration
- `next.config.js`: Configured for remote images and standalone output.
- `tsconfig.json`: Uses path aliases (`@/*`) and optimized module resolution.
- `tailwind.config.ts`: Customized with DaisyUI and animation plugins.
