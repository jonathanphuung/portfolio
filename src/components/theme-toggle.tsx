"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const preferredTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : systemDark
          ? "dark"
          : "light";

    setTheme(preferredTheme);
    document.documentElement.setAttribute("data-theme", preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="nav-link"
      aria-label="Toggle light and dark mode"
    >
      {mounted && theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
