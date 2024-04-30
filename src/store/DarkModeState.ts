import { create } from 'zustand'

export const useDarkModeState = create<IDarkModeState>(set => ({
  isDarkMode: false,
  setIsDarkMode: (value) => set({ isDarkMode: value }),
}));