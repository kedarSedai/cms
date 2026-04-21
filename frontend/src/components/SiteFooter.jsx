import Link from "next/link";
import { site, mainNav } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container wide className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-xl font-bold text-[var(--ink)]">
              {site.name}
            </p>
            <p className="mt-2 max-w-md text-sm text-[var(--ink-soft)]">
              {site.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]">
              Explore
            </p>
            <ul className="mt-3 grid gap-1.5 text-sm text-[var(--accent)]">
              {mainNav.slice(0, 8).map((item) => (
                <li key={item.href}>
                  <Link className="hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]">
              Connect
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[var(--ink-soft)]">
              <li>
                <a
                  className="text-[var(--accent)] hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--ink-muted)]">
          © {new Date().getUTCFullYear()} {site.name}. Frontend in{" "}
          <code className="rounded bg-[var(--code-bg)] px-1">frontend/</code> · API
          placeholder in <code className="rounded bg-[var(--code-bg)] px-1">backend/</code>.
        </p>
      </Container>
    </footer>
  );
}
