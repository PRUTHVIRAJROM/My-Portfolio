# Setup (do this before the workshop)

Budget 30 minutes. If anything fails, note the error and bring it on the day.

## 1. Install

| Tool | Get it | Check it works |
| --- | --- | --- |
| Node.js 22 LTS or newer | https://nodejs.org (pick the LTS button) | `node -v` prints `v22.x` or higher |
| Git | https://git-scm.com/downloads | `git --version` |
| VS Code | https://code.visualstudio.com | opens |

Recommended VS Code extensions: **Tailwind CSS IntelliSense**, **ES7+ React snippets**, **Prettier**.

After installing Git, set your name and email (use the same email as your GitHub account):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 2. Accounts

1. **GitHub**: sign up at https://github.com. Use your college email to also claim the free [GitHub Student Developer Pack](https://education.github.com/pack).
2. **Vercel**: sign up at https://vercel.com with **Continue with GitHub**, on the free Hobby plan.

## 3. Test run

```bash
git clone <this-repo-url> portfolio
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173. If you see the portfolio, you're ready.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `node` or `npm` is not recognized | Close and reopen the terminal (or VS Code) after installing Node. On Windows, restart if it still fails. |
| `npm install` fails with `EACCES` / permission denied | Don't use `sudo`. On macOS/Linux install Node with [nvm](https://github.com/nvm-sh/nvm) instead. |
| PowerShell says "running scripts is disabled" | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` in PowerShell, then reopen it. |
| Vite says your Node version is too old | Install Node 22 LTS or newer and reopen the terminal. |
| Port 5173 is already in use | Vite picks the next free port automatically. Use the URL it prints. |
| Page is blank | Open DevTools (F12) → Console and read the red error. |
| Styles are missing | Check that `src/main.jsx` imports `./index.css` and that `index.css` starts with `@import "tailwindcss";`. |
| `git push` asks for a password | GitHub doesn't accept passwords. Sign in with the browser popup, or use [GitHub Desktop](https://desktop.github.com) or VS Code's built-in GitHub sign-in. |
