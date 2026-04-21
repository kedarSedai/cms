# Rising MVPs

- **`frontend/`** — Next.js app (`package.json` name `ryan`).
- **`backend/`** — Placeholder for a future API (see `backend/README.md`).

## Local dev

```bash
cd frontend && npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (from scratch)

Follow these in order. The app lives in **`frontend/`**; Vercel must treat **`frontend`** as the project root.

### 1. Prepare GitHub

1. Create a repository (e.g. `CMS` or `rising-mvps`) if you don’t have one yet.
2. From your machine, in the **monorepo root** (folder that contains `frontend/`):

   ```bash
   git init
   git add frontend package.json README.md .gitignore
   git add backend
   git commit -m "Initial commit: Next.js frontend"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```

3. Confirm **`frontend/package-lock.json`** is committed (Vercel needs it for `npm install`):

   ```bash
   git ls-files frontend/package-lock.json
   ```

   You should see: `frontend/package-lock.json`

4. Do **not** add a **`vercel.json`** at the repo root unless you know you need it. Do **not** add **`frontend/vercel.json`** unless you have a special case—defaults work best with Next.js on Vercel.

### 2. Create the Vercel project

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. **Add New… → Project**.
3. **Import** your GitHub repository.
4. Before you click **Deploy**, open **Configure Project** (or “Edit” next to the framework row).

### 3. Critical settings (do this before the first deploy)

| Setting | Value |
|--------|--------|
| **Root Directory** | `frontend` — click “Edit”, type `frontend`, save. This folder must contain `package.json` with `"next"` in it. |
| **Framework Preset** | **Next.js** (or leave **Auto** after Root Directory is set). |
| **Build Command** | Leave **empty** (default). |
| **Install Command** | Leave **empty** (default). |
| **Output Directory** | Leave **empty**. Do **not** set `public` or `.next`. |

Optional: **Node.js Version** — pick **20.x** or newer (matches `engines` in `frontend/package.json`).

### 4. Deploy

1. Click **Deploy**.
2. Wait for **Build** to finish (logs should show `next build` and routes under `frontend`).
3. When it’s **Ready**, use **Visit** on that deployment to open the site.

Your production URL will look like `your-project-name.vercel.app`.

### 5. After the first successful deploy

- **Production branch**: **Settings → Git → Production Branch** — usually **`main`**. Pushes to that branch update production.
- **Custom domain** (later): **Settings → Domains** — add your domain and follow DNS instructions.
- **Deployment Protection** (optional): **Settings → Deployment Protection** — if enabled, visitors may need to log in; turn off while testing if URLs act “broken.”

### If the build fails

- **`next: command not found`**: Root Directory must be **`frontend`**, and **`frontend/package-lock.json`** must be in Git. Clear any custom Install/Build commands in Vercel.
- **Wrong framework**: Set **Framework** to **Next.js** and clear **Output Directory**.

### If the build succeeds but the site is `404 NOT_FOUND`

- Root Directory is still wrong, **Framework** isn’t Next.js, or **Output Directory** was set manually — fix per the table above and redeploy.
- Open **Visit** from the **Deployments** tab for that exact build (not an old bookmark).
- Temporarily disable **Deployment Protection** to test.

---

### `next: command not found` (detail)

`frontend/package.json` runs Next via **`node ./node_modules/next/dist/bin/next …`** so the build does not rely on the `next` binary being on `PATH`. Install must still run in **`frontend/`** (correct Root Directory + lockfile).
