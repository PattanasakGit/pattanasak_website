import { create } from 'zustand'

export const useDarkModeState = create<IDarkModeState>(set => ({
  isDarkMode: true,
  setIsDarkMode: (value) => set({ isDarkMode: value }),
}));