"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useAlert } from "./AlertContext";

export type Theme = "light" | "dark";
export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

export const themeContext = createContext<ThemeContextType>({
  theme: "light",
  mode: "system",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [theme, setTheme] = useState<Theme>("light");
  const { showAlert } = useAlert();

  useEffect(() => {
    const updateTheme = () => {
      if (mode === "light") setTheme("light");
      else if (mode === "dark") setTheme("dark");
      else {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(systemDark ? "dark" : "light");
      }
    };

    updateTheme();

    let mediaQuery: MediaQueryList | null = null;
    const handleChange = (e: MediaQueryListEvent) => {
      if (mode === "system") {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    if (mode === "system") {
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleChange);
    }

    return () => {
      if (mediaQuery) mediaQuery.removeEventListener("change", handleChange);
    };
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = (newMode: ThemeMode) => {
    if(mode === newMode) return;
    setMode(newMode);
    showAlert(`${newMode} theme enabled`, "success");
  };

  return (
    <themeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};


export const useTheme = () => useContext(themeContext);
