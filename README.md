# Compassionate Care Companions — marketing site

A starter marketing site for an in-home senior care business, built with
**React 19 + Vite + Tailwind CSS v4 + React Router**.

> This is an original build. It follows the common structure and UX conventions
> of the home-care industry (Home Instead, Visiting Angels, ComforCare, etc.) but
> uses original placeholder copy, an original visual identity ("Compassionate
> Care Companions"), and stock imagery. Swap in the client's brand, copy, and photos as they
> arrive — the content is centralized to make that easy.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Company name, phone, email, address, hours | `src/data/site.ts` → `company` |
| Services (titles, descriptions, checklists) | `src/data/site.ts` → `services` |
| Testimonials, FAQs, values, process steps | `src/data/site.ts` |
| Locations list | `src/data/site.ts` → `locations` |
| Careers perks / application copy | `src/data/site.ts` + `src/pages/Caregivers.tsx` |
| **All image URLs** | `src/lib/images.ts` |
| Colors and fonts | `src/index.css` (`@theme` block) |
| Navigation links | `src/components/Navbar.tsx` |

### Images

Every image is referenced through `src/lib/images.ts`. The `<Img>` component
(`src/components/Img.tsx`) shows a labelled placeholder if a URL fails to load, so
the layout never breaks while photos are being swapped. To use the client's
photos, drop them in `src/assets/` and import them, or replace the URLs.

## Pages / routes

- `/` — Home
- `/services` and `/services/:slug` — Services overview + detail
- `/about` — About
- `/caregivers` — Careers + application form (demo, not wired to a backend)
- `/locations` — Service areas
- `/contact` — Contact + callback request form (demo, not wired to a backend)

## Forms

The Contact and Careers forms are front-end only. Connect them to a form backend
(Formspree, Basin), an email API, or the client's CRM before launch.

## Deploying

Static host any provider (Netlify, Vercel, Cloudflare Pages). `public/_redirects`
handles SPA fallback for Netlify; for others, add an equivalent rewrite of all
paths to `/index.html`.
