# 05: Code walkthrough

A tour of the `master` branch, in the order the browser runs it.

## 1. `index.html` → `main.jsx`

`index.html` is the only HTML page. It has an empty `<div id="root">` and loads `/src/main.jsx`.

`main.jsx` imports `index.css` (which pulls in Tailwind) and renders `<App />` into that div. Everything you see is React drawing inside `#root`. This is what "single-page app" means.

## 2. `App.jsx`: the page layout

`App` lays out the page top to bottom:

```
App
├── Navbar        name, darkMode, onToggleDarkMode
├── main
│   ├── Hero      profile
│   ├── About     paragraphs
│   ├── Skills    skills
│   ├── Projects  projects
│   │   └── ProjectCard ×N   project, isFavourite, onToggleFavourite
│   └── Contact   email, socials
└── Footer        name
```

The names after each component are its **props**: values the parent passes in, like arguments to a function.

```jsx
<Hero profile={profile} />            // App passes it in
export default function Hero({ profile }) { ... }   // Hero reads it out
```

The prop name must match on both sides. `<Hero user={profile} />` would leave `profile` undefined inside `Hero`.

## 3. Data lives in `src/data/portfolio.js`

The components contain no personal content. They read `profile`, `about`, `skills` and `projects` from one file. To add a project, add an object to the `projects` array. No JSX changes needed.

## 4. Rendering lists with `.map()`

```jsx
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

`.map()` turns an array of data into an array of elements. `key` tells React which item is which, so it can update the list correctly when it changes. Use a stable, unique value such as an `id`.

## 5. State with `useState`

State is data that changes while the page is open. When state changes, React re-renders the component.

| Where | State | What changes it |
| --- | --- | --- |
| `App` | `darkMode` | the 🌙/☀️ button |
| `Navbar` | `menuOpen` | the ☰ button on mobile |
| `Projects` | `activeTag` | the filter buttons |
| `Projects` | `favourites` | the ☆ button on each card |

Two rules:

1. **Never change state in place.** `favourites.push(id)` changes the same array, so React thinks nothing changed. Make a new one: `setFavourites([...favourites, id])`.
2. **Pass a function to `onClick`, don't call it.** `onClick={() => setMenuOpen(!menuOpen)}` runs on click. `onClick={setMenuOpen(!menuOpen)}` runs during every render, which triggers another render, forever.

## 6. `useEffect` for dark mode

```jsx
useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode)
  localStorage.setItem('theme', darkMode ? 'dark' : 'light')
}, [darkMode])
```

An effect runs after React renders. The `[darkMode]` array means "only re-run when `darkMode` changes". It adds the `dark` class to `<html>` and saves the choice.

## 7. Tailwind

Tailwind gives you small single-purpose classes instead of writing CSS:

```css
/* Plain CSS */
.button { background: #4f46e5; color: white; padding: 0.625rem 1.25rem; border-radius: 0.5rem; }
.button:hover { background: #6366f1; }
```

```jsx
// Tailwind
<a className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-500">
```

Prefixes change when a class applies:

- `md:flex` applies from the medium breakpoint (768px) up. Tailwind is mobile-first: unprefixed classes are for phones, prefixes add bigger-screen styles.
- `hover:` applies on mouse hover.
- `dark:bg-slate-950` applies when `<html>` has the `dark` class. `index.css` sets that up with `@custom-variant dark`.

Tailwind scans your files for class names **written out in full**. `border-t-${color}-500` never appears in full, so the class is never generated. `ProjectCard.jsx` uses a lookup object instead.

## 8. `vite.config.js`

```js
plugins: [react(), tailwindcss()]
```

Vite is the dev server and bundler. The React plugin compiles JSX; the Tailwind plugin generates the CSS. `npm run build` bundles everything into `dist/`, which is what Vercel serves.

## 9. `public/`

Files in `public/` are served from the site root. `public/projects/weather.svg` is at `/projects/weather.svg`. Never put `public` in the path.

## Compare `dev` and `master`

See exactly what you'll fill in:

```bash
git diff dev master -- src
```
