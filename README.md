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
| FAQs, values, process steps | `src/data/site.ts` |
| Locations list | `src/data/site.ts` → `locations` |
| Careers perks / application copy | `src/data/site.ts` + `src/pages/Caregivers.tsx` |
| **All image URLs** | `src/lib/images.ts` |
| Colors and fonts | `src/index.css` (`@theme` block) |
| Navigation links | `src/components/Navbar.tsx` |
| Form submissions | `.env` → `VITE_FORMSUBMIT_CODE` (see `.env.example`) |

### Images

Every image is referenced through `src/lib/images.ts`. The `<Img>` component
(`src/components/Img.tsx`) shows a labelled placeholder if a URL fails to load, so
the layout never breaks while photos are being swapped. To use the client's
photos, drop them in `src/assets/` and import them, or replace the URLs.

## Pages / routes

- `/` — Home
- `/services` and `/services/:slug` — Services overview + detail
- `/about` — About
- `/careers` and `/careers/apply` — Careers + application form
- `/locations` — Service areas
- `/contact` — Contact + callback request form

## Forms

The Contact form and the caregiver application form (Apply page + `/careers`)
submit to [FormSubmit.co](https://formsubmit.co), a free backend that emails each
submission. Both are plain `POST` forms (config in `src/lib/formSubmit.ts`); on
success FormSubmit redirects back to `…?sent=1` and the page shows a thank-you.

1. `cp .env.example .env` and set `VITE_FORMSUBMIT_CODE` — either the destination
   email address, or (better) the random code from a free FormSubmit account.
2. Set the same variable in your host's environment (Netlify/Vercel/etc.).
3. Submit each form once. FormSubmit sends a one-time **activation email** to the
   destination address — click its link, then submissions start arriving.

Until a code is set, the forms show a "reach us directly" message with the phone
and email. The application form's **résumé upload** (PDF/Word) works on the free
plan; total attachment size must stay under 10 MB. Send a test application with a
file attached before launch.

## Deploying

Deployed to **GitHub Pages** by `.github/workflows/deploy.yml` on every push to
`main` (builds with `npm run build`, publishes `dist/`).

- **Form backend:** add `VITE_FORMSUBMIT_CODE` under **Settings → Secrets and
  variables → Actions → Variables**. The workflow passes it to the build.
- **SPA routing:** `npm run build` copies `index.html` to `404.html` so deep
  links (e.g. `/careers/apply`) load the app instead of a GitHub 404 page.
- **Custom domain:** set it under **Settings → Pages** (writes a `CNAME` file),
  then in the DNS host point `A` records to GitHub's Pages IPs and a `CNAME` for
  `www` to `<user>.github.io`. `base` in `vite.config.ts` is `/`, which is
  correct for a custom domain or a user page — a project-page URL
  (`user.github.io/repo/`) would need `base` and a router `basename`.

`public/_redirects` (SPA fallback) is kept for Netlify / Cloudflare Pages if you
move there — both also read `VITE_FORMSUBMIT_CODE` from a dashboard env var.
