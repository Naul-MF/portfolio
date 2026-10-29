# Portfolio

A premium, dark-themed developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS and Framer Motion — featuring a React Three Fiber particle sphere, Lenis smooth scrolling, glassmorphism cards and scroll-driven animations.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — custom dark palette (`#050505` background, `#7C3AED` accent)
- **Framer Motion** — scroll reveals, magnetic buttons, micro-interactions
- **React Three Fiber / Three.js** — animated 3D particle sphere in the hero
- **Lenis** — smooth scrolling
- **Lucide React + React Icons** — iconography

## Structure

```
app/            layout, page, global styles
components/     one component per section (Hero, About, Projects, ...)
components/ui/  reusable primitives (Reveal, MagneticButton, Counter, ...)
lib/data.ts     all site content — edit this to make it yours
public/         project images and resume
```

## Customizing

All content (name, socials, projects, skills, experience, stats) lives in [lib/data.ts](lib/data.ts). Replace the placeholder images in `public/projects/` and `public/resume.pdf` with your own.
