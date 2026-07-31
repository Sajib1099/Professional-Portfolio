# Sajib Sarker — Portfolio

A premium, production-ready personal portfolio built with React, Vite, Tailwind CSS and
Framer Motion.

## 1. Before you run it — two assets to add

This project ships with placeholders for two files that only you can provide:

| File | Location | What to do |
|---|---|---|
| Profile photo | `public/profile-placeholder.svg` | Replace with your real photo. Recommended: export a square-ish JPG/PNG (e.g. `profile.jpg`, at least 800×1000px), drop it in `public/`, then update `avatar:` in `src/data/portfolioData.js` to `/profile.jpg`. |
| Resume PDF | `public/resume.pdf` (not included) | Export your resume as a PDF named exactly `resume.pdf` and place it in `public/`. The **Download Resume** buttons already link to `/resume.pdf` — they'll work as soon as the file exists. |

Everything else — all text, project details, skills, education — is real content, already
wired in. There is no lorem ipsum anywhere in this project.

## 2. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## 3. Configure the contact form (EmailJS)

The Contact section is fully wired to send real emails via
[EmailJS](https://www.emailjs.com) — no backend required.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** with these variables: `{{from_name}}`, `{{reply_to}}`,
   `{{subject}}`, `{{message}}`, `{{to_email}}` → copy the **Template ID**.
4. Go to **Account → General** → copy your **Public Key**.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm run dev` after editing `.env` (Vite only reads env files on startup).

**Note:** until `.env` is filled in, the form still works end-to-end — submitting it opens
the visitor's email client with the message pre-filled to `sajibeducation@gmail.com`, so
nothing is ever broken for a visitor. Adding the EmailJS keys upgrades this to a silent,
in-page send with a proper success/error state, which is the recommended production setup.

When deploying (Vercel, Netlify, etc.), add the same three `VITE_EMAILJS_*` variables in
your host's **Environment Variables** settings — `.env` is git-ignored and never deployed.

## 4. Customize content

All copy lives in one file: `src/data/portfolioData.js`. Update your bio, education,
skills, projects, experience, achievements or contact details there — no need to touch
any component. Section order and layout are wired in `src/App.jsx`.

## 5. Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, ProjectCard, ThemeToggle, BackToTop, ...
  sections/       One file per page section (Hero, About, Projects, Contact, ...)
  context/        Theme (dark/light) context
  data/           Single source of truth for all site content
  index.css       Tailwind layers + design tokens (glass panels, gradients, chips)
public/
  robots.txt, sitemap.xml, resume.pdf, favicon.svg, profile photo
```

## 6. SEO

`index.html` already includes title/description meta tags, Open Graph, Twitter Card tags,
a canonical URL and JSON-LD structured data (`Person` schema). Update the placeholder
domain `https://sajibsarker.dev/` throughout `index.html`, `public/robots.txt` and
`public/sitemap.xml` once you have a real domain.

## 7. Deploy on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output
   directory `dist` (both auto-filled).
4. Add the three `VITE_EMAILJS_*` environment variables under **Settings → Environment
   Variables**.
5. Deploy. Every push to your main branch redeploys automatically.

After deploying, update the canonical URL, Open Graph URLs and sitemap with your real
Vercel/custom domain.

## Tech stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · React Router · EmailJS
