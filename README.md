# Personal Website — React + Tailwind (Starter)

A professional, fast site with a paper-summaries section (Markdown-based) and a web CV.

## 1) Install prerequisites (Windows 11)

1. **Node.js LTS** (v22.x recommended) — download from <https://nodejs.org/en> and install with default options.
2. **Git for Windows** — download from <https://git-scm.com/download/win> and install with default options.
3. **VS Code** (optional but recommended) — <https://code.visualstudio.com/>

> To verify installation, open **PowerShell** and run:
```powershell
node -v
npm -v
git --version
```

## 2) Create the GitHub repository

1. Create a new repository named **`lukaszsawala.github.io`** (this enables the special *user site* domain).
2. Do **not** initialize with any files (we'll push from local).

## 3) Start the project locally

```powershell
# 1) Unzip this starter somewhere (e.g., Documents)
# 2) In PowerShell, cd to the folder:
cd .\lukasz-website-starter

# 3) Install dependencies
npm install

# 4) Start the dev server (http://localhost:5173)
npm run dev
```

## 4) Customize content

- **Profile**: edit `src/data/profile.js` (toggle `showPhone` as you prefer).
- **Projects**: edit `src/data/projects.js`.
- **CV PDF**: replace `public/cv.pdf` with your latest CV (same filename).
- **Paper summaries**:
  1. Copy `public/papers/template.md` → `public/papers/2025-08-31-my-paper.md`.
  2. Add an entry in `src/data/papers.js`:
     ```js
     {
       title: "My Paper Title",
       date: "2025-08-31",
       tags: ["RL", "Transformers"],
       slug: "my-paper",
       file: "/papers/2025-08-31-my-paper.md",
       abstract: "One-liner about the paper."
     }
     ```

## 5) First deploy to GitHub Pages

```powershell
# Initialize git, commit, and set the remote to your new repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/LukaszSawala/lukaszsawala.github.io.git

# Build the site
npm run build

# Deploy using the gh-pages package (publishes the dist/ folder)
npm run deploy
```
Then go to **GitHub → Repository → Settings → Pages**, and choose the **`gh-pages`** branch (if not auto-detected). Your site should appear at <https://lukaszsawala.github.io> within a minute.

> For subsequent updates:
```powershell
# Make edits...
git add .
git commit -m "Update content"
git push origin main

# Redeploy
npm run deploy
```

## 6) Troubleshooting

- If assets 404 after deployment, make sure your repository is **`lukaszsawala.github.io`** (user site). If you use a project repo, set `base` in `vite.config.js` to `"/<reponame>/"`.
- If `npm` fails on corporate networks, try: `npm config set strict-ssl false` (not recommended long-term) or switch to a different network.
- If `npm run deploy` fails, try deleting the local `node_modules` and reinstall with `npm install`.
- To use a **custom domain**, add a `CNAME` file in the repo root with your domain and configure DNS to point to GitHub Pages.

---

**Good luck!** Add papers as `.md` files in `public/papers` and entries in `src/data/papers.js` — push, deploy, done.