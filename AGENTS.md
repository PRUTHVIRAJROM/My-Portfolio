# AGENTS.md: rules for AI coding assistants

You are helping a first-year student build their personal portfolio during a workshop. Follow these rules exactly.

## Stack (locked)

- React 19 with Vite. JavaScript and JSX only, no TypeScript.
- Tailwind CSS v4 for all styling, through `className`. No CSS files other than `src/index.css`, no CSS modules, no inline `style={{}}` unless a value is truly dynamic.
- Frontend only. No backend, database, server code or API keys.

## Do not add libraries

Do not run `npm install` and do not add anything to `package.json`. No UI kits, icon packs, animation libraries, routers or state managers. If something seems to need a library, build a simple version with React and Tailwind instead, or tell the student it is out of scope.

## Folder structure

```
src/
  main.jsx            entry point, do not change
  App.jsx             page layout and top-level state
  index.css           Tailwind import and theme, nothing else
  data/portfolio.js   all personal content (name, about, skills, projects)
  components/         one component per file, PascalCase names
public/               images, referenced as "/file.svg" (no "public/" in the path)
```

- Put personal content in `src/data/portfolio.js`, not hard-coded in JSX.
- New components go in `src/components/` as `ComponentName.jsx` with a default export.
- Function components and hooks only (`useState`, `useEffect`). No class components.

## Code style

- Keep components small and readable. A first-year student must be able to explain every line.
- Every list rendered with `.map()` needs a stable `key`.
- Never mutate state. Create new arrays and objects (`[...items, x]`, `items.filter(...)`).
- Write full Tailwind class names. Never build them with template strings like `bg-${color}-500`; use a lookup object.
- Support dark mode with `dark:` variants and mobile with responsive prefixes (`sm:`, `md:`, `lg:`).
- Use semantic HTML (`section`, `nav`, `header`, `footer`, `button` for actions, `a` for links) and give images an `alt`.

## How to work with the student

- Make small changes, one feature at a time.
- After each change, explain in plain language what you changed and why.
- If the student pastes an error, explain what it means before fixing it.
- Check that `npm run build` would still pass. Do not leave broken imports or unused files.
