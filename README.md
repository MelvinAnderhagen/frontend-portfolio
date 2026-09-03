# Melvin Anderhagen — Portfolio

My personal portfolio site, built to showcase frontend projects while I look for a
frontend development internship. Coming from a .NET background.

🔗 **Live site:** https://melvinanderhagen.github.io/frontend-portfolio/

## Tech stack

- **React** + **Vite** — component-based UI, fast dev/build tooling
- **React Router** (`HashRouter`) — client-side routing, one page per project
- Plain CSS with custom properties — no framework, hand-tuned design system
- **GitHub Actions** — auto-builds and deploys to GitHub Pages on every push to `main`

## Features

- Single-page hero, about, skills, and project-grid sections
- Each project gets its own route (`/#/projects/<slug>`), driven by a single data file
- Responsive layout, keyboard-focus states, and reduced-motion support
- Zero backend — fully static, fully free to host

## Project structure

```
src/
├── components/     # Nav, Footer, Terminal (hero animation)
├── pages/          # Home.jsx, Project.jsx
├── data/
│   └── projects.js # Add/edit projects here — pages generate automatically
├── App.jsx         # Layout shell (nav + outlet + footer)
├── main.jsx        # Router setup
└── index.css        # Design tokens and all styling
```

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` are automatically built and deployed to GitHub Pages via
`.github/workflows/deploy.yml` — no manual steps required.

## Contact

- Email: anderhagen.melvin@gmail.com
- GitHub: [@MelvinAnderhagen](https://github.com/MelvinAnderhagen)
- LinkedIn: [linkedin](https://www.linkedin.com/in/melvin-anderhagen-2195131b3/)
