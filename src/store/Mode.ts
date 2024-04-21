import { create } from 'zustand'

interface IDarkModeState {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const useDarkModeState = create<IDarkModeState>(set => ({
  isDarkMode: false,
  setIsDarkMode: (value) => set({ isDarkMode: value }),
}));