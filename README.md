# Rising MVPs

Monorepo with **npm workspaces**. Dependencies are installed from the **repository root** (one `package-lock.json`).

- **`frontend/`** — Next.js app (workspace package name `ryan`).
- **`backend/`** — Placeholder for Strapi or another API (see `backend/README.md`).

## Local dev

From repo root (recommended):

```bash
npm install
npm run dev
```

Or from `frontend/`: `npm install` still works if you only have that folder, but the canonical flow is root + workspaces.

## Vercel

Connect the Git repo with **root directory left as the project root** (the folder that contains this `README.md`). Vercel will run `npm install` then `npm run build` at the root; workspaces install `next` and the build runs `next build` inside `frontend/`.

**Do not** set Vercel “Root Directory” to `frontend` unless you remove the workspace setup—otherwise use root as above.
