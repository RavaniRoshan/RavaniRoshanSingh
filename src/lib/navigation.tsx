import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { playTransition } from "./transition";

type NavContextType = {
  view: string;
  navigate: (view: string, trigger?: string | null) => void;
  theme: string;
  toggleTheme: () => void;
};

const NavContext = createContext<NavContextType | null>(null);

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavigationProvider");
  return ctx;
}

const PANELS = [
  "niki",
  "backstop",
  "winscript-lang",
  "winscript-mcp",
  "openjck",
  "openjck-cloud",
  "about",
  "photos",
  "music",
];

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<string>("home");
  const [theme, setTheme] = useState<string>(() => {
    try {
      return localStorage.getItem("yevtam-theme") || "light";
    } catch {
      return "light";
    }
  });

  const navigate = (next: string, trigger?: string | null) => {
    if (next === view) return;
    if (trigger) playTransition(trigger, () => setView(next));
    else setView(next);
  };

  // Keep body attributes + lock background scroll while an app window is open.
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-view", view);
    body.setAttribute("data-project", view === "home" ? "" : view);
    const open = view !== "home";
    body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [view]);

  // Theme persistence + attribute sync (CSS + starfield read body[data-theme]).
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    const sw = document.querySelector(".site-switcher");
    if (sw) sw.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("yevtam-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Hash deep-links (shareable #niki etc.)
  useEffect(() => {
    const fromHash = () => {
      const h = (location.hash || "").replace("#", "");
      if (h && PANELS.includes(h)) setView(h);
    };
    window.addEventListener("hashchange", fromHash);
    if (location.hash) fromHash();
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // Esc returns home
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && view !== "home") setView("home");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  return (
    <NavContext.Provider value={{ view, navigate, theme, toggleTheme }}>
      {children}
    </NavContext.Provider>
  );
}
