# Ahmad Hassan — Backend / MERN Developer Portfolio

A premium, animated, dark/light-mode portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite — framework preset **Vite**, build command `npm run build`, output dir `dist`. No extra config needed (a `vercel.json` is included for SPA routing).
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Before you share this with recruiters

- **Resume:** replace `public/Ahmad-Hassan-Resume.pdf` with your real resume (keep the same filename, or update the `href` in `Navbar.jsx` and `Hero.jsx`).
- **Project images:** replace the placeholder SVGs in `public/projects/` with real screenshots (`library-management.png`, `task-manager-api.png`, `restaurant-website.png`), then update the `image` paths in `src/data/projects.js`.
- **Links:** update GitHub/LinkedIn/email URLs (currently placeholders) in `Navbar.jsx`, `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.
- **Project 2:** the brief you gave me had an empty slot for Project 2, so I added a placeholder "Task Manager REST API" project in `src/data/projects.js` — swap it for your real second project (or delete the entry) whenever you're ready.
- **Contact form:** `Contact.jsx` currently simulates a submit. Wire the `handleSubmit` function to a form backend (Formspree, EmailJS, or your own API route) to actually receive messages.
- **SEO:** update the canonical URL, `og:image`, and Twitter meta tags in `index.html` once your domain is live.

## Project structure

```
src/
  components/     Navbar, Hero, About, Skills, Projects, Contact, Footer, etc.
  data/            skills.js, projects.js — edit content here
  hooks/           useTheme.jsx — dark/light mode context
  index.css        global styles, focus states, reduced-motion support
  App.jsx          page composition
public/
  projects/        project preview images
  Ahmad-Hassan-Resume.pdf
```

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · react-icons · lucide-react
