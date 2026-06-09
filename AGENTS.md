# AGENTS.md

## Project Overview

Next.js 16.2.7 portfolio site using App Router, React 19, TypeScript 5, Tailwind CSS 4.

## Commands

- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm lint` — ESLint (core-web-vitals + typescript)
- `pnpm start` — serve production build

No test or typecheck scripts defined. Run `tsc --noEmit` manually for type checking.

## Structure

- `app/layout.tsx` — root layout with Geist fonts
- `app/page.tsx` — home page
- `app/globals.css` — Tailwind v4 import + CSS variables

## Key Details

- Package manager: **pnpm**
- Tailwind v4 uses `@tailwindcss/postcss` (not v3 config)
- Path alias: `@/*` maps to project root
- Fonts: Geist Sans + Geist Mono via `next/font/google`
- Dark mode: uses `prefers-color-scheme` media query (no toggle)

## Tech Stack Decisions

- **UI/Estilos**: Tailwind CSS (ya incluido)
- **Componentes UI**: shadcn/ui (estilo base-nova, iconos lucide)
- **Animaciones**: Motion (librería de animaciones para React)
- **Temas**: next-themes para light/dark mode
- **Tipografías**: Google Fonts vía Next.js (Inter y JetBrains Mono)
- **Fondo animado sutil**: GSAP + @gsap/react (React Bits)

## shadcn/ui

- Configurado con estilo `base-nova` y CSS variables
- Componentes en `@/components/ui/`
- Utils en `@/lib/utils`
- Agregar componentes: `pnpm dlx shadcn@latest add [component]`
