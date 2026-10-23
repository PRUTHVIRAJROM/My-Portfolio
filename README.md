# Build & Ship Your Portfolio

A 6-hour workshop where you build a personal portfolio website and put it on the internet.

**Stack:** [React](https://react.dev) (with [Vite](https://vite.dev)) + [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com). Frontend only.

## Branches

| Branch | What's in it | When you use it |
| --- | --- | --- |
| `dev` | Vite + React + Tailwind set up, empty components with `// TODO` markers, a data file to fill in | Hours 5–6: build your own portfolio |
| `master` | The finished reference portfolio | Hour 4: code walkthrough |
| `bug-hunt` | A copy of `master` with 8 planted bugs | Hour 4: bug hunt (see `BUG_HUNT.md` on that branch) |

## Quick start

Install the tools in [SETUP.md](SETUP.md) first.

```bash
git clone <this-repo-url> portfolio
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173. Edit a file, save, and the page updates.

Switch branches with:

```bash
git checkout dev        # or master, or bug-hunt
npm install             # safe to run again after switching
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the `dist/` build locally to check it |

## Project structure

```
index.html              the one HTML page; React renders into <div id="root">
vite.config.js          Vite + React + Tailwind plugins
public/                 static files served as-is (images, favicon)
src/
  main.jsx              entry point: renders <App />
  App.jsx               page layout and dark-mode state
  index.css             Tailwind import and theme
  data/portfolio.js     your content: profile, about, skills, projects
  components/           Navbar, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
```

## Docs

- [SETUP.md](SETUP.md): installs, accounts and troubleshooting
- [AGENTS.md](AGENTS.md): rules for AI assistants (Claude Code, Copilot, Cursor, etc.)
- [docs/05-code-walkthrough.md](docs/05-code-walkthrough.md): how this code works
- [docs/06-deploy-to-vercel.md](docs/06-deploy-to-vercel.md): ship it
