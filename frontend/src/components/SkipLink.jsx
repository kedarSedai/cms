export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-fg)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--header-fg)]"
    >
      Skip to main content
    </a>
  );
}
