# Roshan Ravani — Portfolio

A personal portfolio presented as a Mac‑desktop experience: a pixel‑starfield wallpaper, a dock with magnification, fluid SVG page transitions, light/dark themes, and app‑window “project” panels for each project.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**, with a shadcn‑style component setup and GSAP for the page‑transition morph.

## Highlights

- **Pixel‑starfield background** — a 16‑FPS canvas starfield (twinkling stars + shooting stars) that recolors for light/dark themes.
- **macOS‑style shell** — custom cursor, dock magnification, top‑bar theme toggle, and a synthesized WebAudio ambience bed.
- **Fluid transitions** — GSAP morphs an SVG wipe between the desktop and each panel; scroll is locked to the background while a panel is open.
- **Project panels** — niki, backstop, WinScript, WinScript MCP, OpenJCK, OpenJCK Cloud, plus About, Photos, and an Apple Music player.
- **Accessibility & readability** — blurred, opaque panel backdrops keep text legible over the wallpaper; `Esc` returns home; hash deep‑links (`#niki`, `#about`, …) are supported.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy

The app is a static SPA. Build with `npm run build` and serve the `dist/` folder (Vercel / Netlify / GitHub Pages, etc.).

## Structure

```
src/
  components/        # TopBar, Hero, Dock, Cursor, Wallpaper, PageTransition, ProjectScreen, BackButton, panels/
  components/ui/     # BackgroundPixelStars (shadcn-style component)
  data/projects.ts  # project content (single source of truth for the panels)
  lib/              # navigation state + GSAP transition
  portfolio.css     # macOS-desktop visual styles
  index.css         # Tailwind entry
```

## License

Personal portfolio. Projects linked within retain their own licenses.
