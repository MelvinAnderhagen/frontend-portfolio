# Portfolio

A small React + Vite portfolio with client-side routing: one home page, plus an
auto-generated detail page per project (`/projects/<slug>`).

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## What to edit

Everything marked `[EDIT]` in the code:

- `src/pages/Home.jsx` — your name, pitch, about text, skill tags
- `src/components/Footer.jsx` — email, GitHub, LinkedIn
- `src/data/projects.js` — your real projects (title, tags, description, links).
  Add or remove entries here and the project grid + detail pages update automatically.
- `index.html` — page `<title>`

To add a downloadable CV: put a PDF in `public/cv.pdf`, then point the "Download CV"
button at `/cv.pdf`.

## Deploy

```bash
npm run build
```

This outputs a static site to `dist/`. Deploy it for free with either:

- **Vercel**: `npx vercel` (or connect the GitHub repo at vercel.com — auto-detects Vite)
- **Netlify**: drag the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop),
  or connect the repo (build command `npm run build`, publish directory `dist`)

Either gives you a live URL to put in your resume and internship applications.
