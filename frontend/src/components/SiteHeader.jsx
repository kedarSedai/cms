"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, site } from "@/data/site";
import { Container } from "./Container";
import { ButtonLink } from "./ButtonLink";
import { ThemeToggle } from "./ThemeToggle";

function NavLink({ href, label, onNavigate, mobile }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const base =
    "rounded-md px-2 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
  const desktop = active
    ? "text-[var(--accent)]"
    : "text-[var(--header-muted)] hover:bg-white/10 hover:text-[var(--header-fg)] dark:hover:bg-white/5";
  const mob = active
    ? "text-[var(--accent)]"
    : "text-[var(--ink)] hover:bg-[var(--surface-2)]";
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`${base} ${mobile ? mob : desktop}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 min-w-0 border-b border-[var(--border)] bg-[var(--header-bg)] text-[var(--header-fg)] shadow-sm">
      <Container wide className="flex h-14 min-w-0 items-center justify-between gap-2 sm:h-16 sm:gap-3">
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 font-heading text-base font-bold tracking-tight text-[var(--header-fg)] sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {site.name}
        </Link>
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto whitespace-nowrap px-1 text-xs lg:flex lg:text-[11px] xl:text-sm"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <NavLink key={item.href} {...item} onNavigate={closeMenu} />
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink
            href="/get-involved"
            variant="secondary"
            className="!border-[var(--header-muted)] !bg-transparent !text-[var(--header-fg)] hover:!bg-white/10 dark:!border-[var(--header-muted)] dark:hover:!bg-white/5"
          >
            Get involved
          </ButtonLink>
          <ButtonLink href={site.donateUrl} external variant="primary">
            Donate
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <ButtonLink
            href={site.donateUrl}
            external
            variant="primary"
            className="!px-3 !py-2 text-xs"
          >
            Donate
          </ButtonLink>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-2 text-[var(--ink)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] dark:border-white/15 dark:bg-white/10 dark:text-[var(--header-fg)]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 18L18 6" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>
      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[min(70vh,520px)] overflow-y-auto border-t border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] lg:hidden"
        >
          <Container wide className="flex flex-col gap-0.5 py-3">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                onNavigate={closeMenu}
                mobile
              />
            ))}
            <div className="mt-3 border-t border-[var(--border)] pt-3">
              <ButtonLink href="/get-involved" variant="secondary" className="w-full">
                Get involved
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
