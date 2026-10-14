# kooshanamini.github.io

Personal website of Kooshan Amini: machine learning, computer vision, and remote sensing.
Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages by GitHub Actions.

**Live:** https://kooshanamini.github.io

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve dist/ locally
```

## Where things live

| What | File |
| --- | --- |
| Name, tagline, links, navigation, email | `src/data/site.ts` |
| Publications, datasets, software | `src/data/publications.ts` |
| Google Scholar citation counts | `src/data/citations.ts` |
| News items (home page) | `src/data/news.ts` |
| Talks and workshops | `src/data/talks.ts` |
| Web CV (education, experience, skills, honors) | `src/data/cv.ts` |
| Project write-ups | `src/content/projects/*.md` |
| Project figures and headshots | `src/assets/` |
| Colors, typography, prose styles | `src/styles/global.css` |
| CV PDF | `public/cv/Kooshan_Amini_CV.pdf` |
| Favicon, social card, robots.txt | `public/` |

### Add a project

Create `src/content/projects/<slug>.md`. The frontmatter schema is in `src/content.config.ts`; copy an existing file
as a template. Use `cover` for a real figure (with `coverFit: contain` for paper figures on white backgrounds) or
`motif` (`satellite`, `architecture`, `flood`, `network`) when imagery cannot be published. Set `featured: true` to show
it on the home page. In the body, an image alone in a paragraph becomes a wide figure, and an italic paragraph right
after it becomes the caption.

### Update the CV PDF

Replace `public/cv/Kooshan_Amini_CV.pdf` and update `cv.updated` in `src/data/site.ts`. The public PDF must not
include a phone number or home address.

### Citation counts

Citation counts come from Google Scholar and live in `src/data/citations.ts` (total, h-index, and per-item counts
keyed by publication `id`). Scholar has no public API, so update the numbers and the `asOf` date by hand.

## Deployment

Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`). In the repository settings,
**Pages → Build and deployment → Source** must be set to **GitHub Actions**.

### Custom domain (later)

1. Buy the domain and add a `CNAME` DNS record pointing to `kooshanamini.github.io`
   (or `A`/`AAAA` records for an apex domain, per GitHub's documentation).
2. Add `public/CNAME` containing the domain, and change `site` in `astro.config.mjs`, `url` in `src/data/site.ts`,
   and the sitemap URL in `public/robots.txt`.
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.

## Credits

Icons adapted from [Lucide](https://lucide.dev) (ISC) and [Simple Icons](https://simpleicons.org) (CC0).
Typeface: [Inter](https://rsms.me/inter/) (OFL). Figures come from the author's own research; figures from published papers are credited in
their captions.
