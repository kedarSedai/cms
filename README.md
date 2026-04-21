# Rising MVPs

- **`frontend/`** — Next.js app (`package.json` name `ryan`).
- **`backend/`** — Placeholder for a future API (see `backend/README.md`).

## Local dev

```bash
cd frontend && npm install && npm run dev
```

Or from repo root: `npm install --prefix frontend` then `npm run dev --prefix frontend`.

## Vercel (`github.com/.../CMS`)

This repo includes **`vercel.json`** so every deploy:

1. Uses the **Next.js** preset (`"framework": "nextjs"`) — Vercel must not treat the app as a static site that expects output in `public/`.
2. Runs `npm install --prefix ./frontend` then `cd frontend && npm run build`.

Leave the Vercel **Root Directory** as the **repository root** (the folder that contains `vercel.json`).

In **Settings → Build & Development Settings**:

- Clear custom **Install Command** / **Build Command** overrides unless you intend to replace `vercel.json`.
- Set **Output Directory** to empty / default (not `public`). Next.js outputs to `.next`; Vercel handles it when the framework is **Next.js**.

Commit and push: `vercel.json`, `package.json`, `frontend/package-lock.json`, and the `frontend/` app.
