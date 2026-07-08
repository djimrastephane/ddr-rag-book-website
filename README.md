# DDR RAG Book — Website

Official project site for **Building Industrial RAG Systems from Daily Drilling Reports**
and its companion repository [ddr-rag-book](https://github.com/djimrastephane/ddr-rag-book).

Built with [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com). Fully static — no database, no backend.

## Setup

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # preview the production build
```

## Where to edit content

| What | Where |
|---|---|
| **All text, links, chapters, tech list, roadmap** | `src/data/site.ts` — the single content file |
| Page copy & sections | `src/pages/*.astro` (each section is commented) |
| Blog posts | `src/pages/blog/*.md` — add a `.md` file, it appears automatically |
| Screenshots | Drop images in `public/screenshots/`, then pass `src="/screenshots/file.png"` to `<ScreenshotCard>` in `demo.astro` / `project.astro` |
| Author photo | Add `public/author.jpg`, swap the placeholder in `src/pages/author.astro` |
| Colors / theme | `src/styles/global.css` (`@theme` block) |
| SEO / OG image | `src/layouts/Base.astro` (add `public/og.png`, uncomment the tag) |
| Domain | `site` in `astro.config.mjs` |

Look for `EDIT:` comments throughout the code — they mark every spot meant for you to change.

## Pages

- `/` Home · `/book/` About + TOC · `/chapters/` Book ↔ repo map + learning guide
- `/project/` Companion project (live GitHub badges + release timeline)
- `/demo/` Screenshots · `/blog/` Blog · `/author/` Author · `/contact/` Contact

## Deployment

**Vercel (recommended):** import the repo at vercel.com — Astro is auto-detected, zero config.

**GitHub Pages:** set `site` (and `base` if not using a custom domain) in `astro.config.mjs`,
then use Astro's official action: https://docs.astro.build/en/guides/deploy/github/

## Notes

- The release timeline on `/project/` fetches the GitHub API from the browser (rate-limited but fine for normal traffic); it degrades to a plain GitHub link if the fetch fails.
- CI badges are served live by shields.io. If the tests workflow file isn't named `tests.yml`, fix the badge URL in `src/pages/project.astro`.
