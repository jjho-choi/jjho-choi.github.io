# jinho-choi-homepage

Personal research homepage — **Astro 5** + **Tailwind CSS 4**, static output, no runtime JS beyond a theme toggle.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

Node 20+ required.

## Where the content lives

Everything on the page comes from **`src/data/site.ts`** — profile, about text, research
themes, news, publications, experience, education. Edit that file, rebuild, done.
`src/pages/index.astro` is layout only; you shouldn't need to touch it to add a paper.

Adding a publication:

```ts
{
  year: "2026",
  title: "…",
  authors: "Someone, <b>Jinho Choi</b>, Someone Else",   // <b> around your own name
  venue: "NeurIPS",
  selected: true,                                        // shows the accent square
  status: "review",                                      // optional: greys the venue tag
  short: "PatchSAE",                                     // placeholder tile text if no teaser
  teaser: "/teasers/patchsae.gif",                      // file in public/teasers/
  tldr: "One sentence on what the paper does.",
  links: [{ label: "pdf", href: "https://arxiv.org/pdf/…" }],
}
```

## To fill in before you publish

- `src/data/site.ts` → `profile.links`: the **Google Scholar** URL is a
  placeholder — GitHub is set to github.com/jjho-choi.
- `src/data/site.ts` → publication `links`/`teaser`: pre-arXiv papers have no links
  yet, and only ConceptScope and PatchSAE have teaser images (the rest show a tile).
- `public/cv.pdf` is the September 2026 CV; replace it whenever the CV changes.
- `astro.config.mjs` → `site`: set to your real Pages URL.

## Design notes

- Tokens live at the top of `src/styles/global.css` (`@theme` block). Colours are
  redefined once for dark mode; components only ever read tokens, so changing the accent
  in one place changes the whole page.
- Three theme states are handled: explicit light, explicit dark, and the default that
  follows the OS. The toggle writes `data-theme` on `<html>` and persists to localStorage.
- Type: Newsreader (display) / IBM Plex Sans (body) / IBM Plex Mono (years, venues,
  labels), from Google Fonts.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Create a repo and push.
2. Settings → Pages → **Source: GitHub Actions**.
3. If the repo is **not** `<username>.github.io`, add `base: '/<repo-name>'` to
   `astro.config.mjs` — otherwise CSS and links 404.

Custom domain: add a `public/CNAME` file containing the domain, then point the DNS at
GitHub. Once it's live, put the new URL on the old Google Sites page so existing links
still lead somewhere.
