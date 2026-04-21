# Rising MVPs

- **`frontend/`** — Next.js app (`package.json` name `ryan`).
- **`backend/`** — Placeholder for a future API (see `backend/README.md`).

## Local dev

```bash
cd frontend && npm install && npm run dev
```

Or from repo root: `npm install --prefix frontend` then `npm run dev --prefix frontend`.

## Vercel

Vercel must use the folder that contains **`next`** in `package.json` — that is **`frontend/`**, not the monorepo root.

### Required settings

1. **Project → Settings → General → Root Directory**  
   Set to: **`frontend`**  
   (So install/build run against `frontend/package.json`, where `"next"` is listed.)

2. **Project → Settings → Build & Development Settings**  
   - **Framework Preset**: **Next.js** (or leave on Auto after root dir is correct).  
   - **Build Command**: leave **default** (`next build` / `npm run build`).  
   - **Install Command**: leave **default** (`npm install` / `yarn` / `pnpm` per lockfile).  
   - **Output Directory**: leave **empty** (do not use `public`).

3. **Remove any root `vercel.json`** from this repo if you still have an old copy that sets `installCommand` / `buildCommand` / `framework` from the repo root — with Root Directory `frontend`, those paths would be wrong.

Commit and push: **`frontend/package-lock.json`** (required for reproducible installs), `frontend/package.json`, `frontend/vercel.json`, and the rest of the app under `frontend/`.

### Still seeing `next: command not found` (exit 127)?

1. **Root Directory** must be **`frontend`** (the folder that contains `package.json` with `"next"` in it). If it is the repo root, `npm install` never installs Next for the app Vercel builds.

2. **Commit `frontend/package-lock.json` to Git.** On a fresh clone, `npm install` needs that file. Confirm locally:  
   `git ls-files frontend/package-lock.json` should print one line.

3. In Vercel **Build & Development Settings**, clear **Install Command** and **Build Command** overrides unless you pasted the values from `frontend/vercel.json` intentionally. A wrong or empty install step leaves `node_modules` empty.

4. Build scripts call Next via **`node ./node_modules/next/dist/bin/next build`** so the build does not depend on the `next` shell shim in `node_modules/.bin`.
