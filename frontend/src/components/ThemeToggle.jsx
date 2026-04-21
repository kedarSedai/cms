"use client";

import { useTheme } from "@/components/AppThemeProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const pending = resolvedTheme === undefined;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/10 text-[var(--header-fg)] transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={
        pending
          ? "Toggle color theme"
          : isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
    >
      {pending ? (
        <span className="h-4 w-4 rounded-full bg-[var(--header-muted)]" aria-hidden />
      ) : isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 3a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zm0 15a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1zm8-7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1zM6 12a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1zm11.657-6.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414zM8.464 16.95a1 1 0 0 0-1.414 0l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414zm10.192 0a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414zM8.464 7.05a1 1 0 0 0 1.414 0l.707-.707A1 1 0 1 0 9.17 4.93l-.707.707a1 1 0 0 0 0 1.414zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
