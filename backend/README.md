# Backend (API / CMS)

This folder is reserved for your **Strapi** project, Node API, or other server code so it stays separate from the Next.js app in `frontend/`.

Suggested next step:

```bash
cd backend
npx create-strapi-app@latest . --quickstart
```

Point the frontend at Strapi using `NEXT_PUBLIC_STRAPI_URL` (you can add fetches in `frontend/src/lib/` when ready).
