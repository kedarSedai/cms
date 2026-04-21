"use client";

/* Theme sync reads localStorage once after mount; setState in layout effect is required for SSR match. */
/* eslint-disable react-hooks/set-state-in-effect */

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "rising-mvps-theme";

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: undefined,
});

export function useTheme() {
  return useContext(ThemeContext);
}

function readStoredTheme() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "light" || s === "dark" || s === "system") return s;
  } catch {
    /* ignore */
  }
  return "system";
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function resolveTheme(theme) {
  if (theme === "dark") return "dark";
  if (theme === "light") return "light";
  return systemPrefersDark() ? "dark" : "light";
}

function applyDom(theme) {
  const resolved = resolveTheme(theme);
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme =
    resolved === "dark" ? "dark" : "light";
  return resolved;
}

export function AppThemeProvider({ children }) {
  /** Same on server and first client pass (hydration-safe). */
  const [theme, setThemeState] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState(undefined);

  useLayoutEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    const resolved = applyDom(stored);
    setResolvedTheme(resolved);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsChange = () => {
      if (readStoredTheme() === "system") {
        setResolvedTheme(applyDom("system"));
      }
    };
    mq.addEventListener("change", onOsChange);
    return () => mq.removeEventListener("change", onOsChange);
  }, []);

  const setTheme = useCallback((value) => {
    setThemeState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    const resolved = applyDom(value);
    setResolvedTheme(resolved);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
