import { create } from "zustand";

interface IDarkModeState {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

const getInitialDark = (): boolean => {
  if (typeof window === "undefined") return false;
  return document.documentElement.dataset.theme === "dark";
};

const applyTheme = (dark: boolean) => {
  if (typeof window === "undefined") return;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("v3-theme", dark ? "dark" : "light"); } catch {}
};

export const useDarkModeState = create<IDarkModeState>((set, get) => ({
  isDarkMode: false,
  setIsDarkMode: (value: boolean) => {
    set({ isDarkMode: value });
    applyTheme(value);
  },
  toggleDarkMode: () => {
    const next = !get().isDarkMode;
    set({ isDarkMode: next });
    applyTheme(next);
  },
}));

if (typeof window !== "undefined") {
  useDarkModeState.setState({ isDarkMode: getInitialDark() });
}
