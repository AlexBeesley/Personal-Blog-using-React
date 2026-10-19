# Personal Blog using React ⚛️🚀

A personal blog by Alexander Beesley: notes on Umbraco, .NET and C#, web development, DevOps and machine learning. A front-end React app written in TypeScript, built with Vite, tested with Vitest and deployed to Netlify.

It wears the **Vantage Glass** design system from my home dashboard project — the same tokens, fonts, wallpaper and liquid-glass panes — laid out mobile first: a glass dock under the thumb on phones, a labelled nav track on desktop.

## Scripts

| | |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest suite once (`npm run test:watch` to watch) |
| `npm run lint` | ESLint (`npm run lint:fix` to fix) |
| `npm run type-check` | TypeScript, no emit |

Requires Node 22.12 or later.

## Layout

```
index.html                 the shell; paints the wallpaper before any script runs
public/                    favicon and touch icon
src/
  main.tsx                 entry: global styles, wallpaper, router
  App.tsx                  routes (each post is a lazily loaded chunk)
  Components/              layout, nav/dock, cards, page contents, code boxes, figures
  Pages/                   home, the five posts, 404
  Styles/tokens.css        the design system's tokens, copied from home-dashboard-glass
  Styles/glass.css         the liquid-glass material, shared type and buttons
  Styles/*.module.css      component styles, in @layer components
  Utilities/               site data, liquid-glass refraction, wallpaper and beam
  fonts/                   Holland Gateway, Shuttle X, Metropolis, Anonymous Pro (WOFF2)
  Images/                  wallpaper and post screenshots
```

## Adding a post

1. Add the page under `src/Pages/`, wrapping its `<Card blogpost>` sections in `<Post title sections>`.
2. Add a route in `src/App.tsx`.
3. Add it to `topics` in `src/Utilities/site.ts`; the nav, the dock and the home page's shelves all read from there.

## Deploy

Netlify builds `master` with `npm run build` and publishes `build/` (see `netlify.toml`).
