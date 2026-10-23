# 06: Deploy to Vercel

You'll put your portfolio in your own GitHub repo, connect it to Vercel, and get a live URL. After that, every push deploys automatically.

## 1. Make it your own repo

On GitHub, click **New repository**. Name it `portfolio`, keep it **Public**, and **don't** add a README, .gitignore or license. Copy the URL it shows.

In your project folder, on the `dev` branch where you built your site:

```bash
git checkout dev
git checkout -b main
git add .
git commit -m "My portfolio"
git remote set-url origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Your repo now has a `main` branch with your site. This is your production branch.

## 2. Check the build locally

Vercel runs `npm run build`. If it fails on your laptop, it fails there too.

```bash
npm run build
npm run preview
```

## 3. Import into Vercel

1. Go to https://vercel.com/new.
2. Under **Import Git Repository**, pick `portfolio`. (If it's missing, click **Adjust GitHub App Permissions** and allow the repo.)
3. Vercel detects **Vite**. Leave the defaults: build command `npm run build`, output directory `dist`.
4. Click **Deploy**. In about a minute you get a URL like `portfolio-yourname.vercel.app`.

## 4. Preview deployments with a PR

This is how teams ship: work on a branch, review a preview, then merge.

```bash
git checkout -b add-contact-section
# make a change, then:
git add .
git commit -m "Add contact section"
git push -u origin add-contact-section
```

1. On GitHub, click **Compare & pull request**, then **Create pull request**.
2. Vercel comments on the PR with a **preview URL**. That's your change, live, without touching production.
3. Happy with it? Click **Merge pull request**. Vercel deploys `main` to your production URL.
4. Back on your laptop:

```bash
git checkout main
git pull
```

## 5. Optional extras

- **Rename your URL:** Project → Settings → Domains → edit the `.vercel.app` name.
- **Custom domain:** buy one and add it under Settings → Domains. Free `.me` and `.tech` domains are in the GitHub Student Pack.
- **Page title:** change `<title>` in `index.html` to your name.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Build fails on Vercel but works locally | Check file name case. Windows and macOS ignore case, Vercel's Linux servers don't: `./components/navbar.jsx` ≠ `Navbar.jsx`. |
| Images missing on the live site | Paths should be `/projects/x.svg`, not `public/projects/x.svg` or `../public/...`. |
| No preview URL on the PR | Make sure the PR is on the repo Vercel imported, and check the Vercel dashboard → Deployments. |
| `git push` rejected | Run `git pull` first, then push again. |
