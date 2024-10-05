import { create } from "zustand";

interface IShowImageModalState {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  onClose: () => void;
  imageUrl: string[];
  initialIndex: number;
  setInitialIndex: (index: number) => void;
  setImageUrl: (imageUrl: string[]) => void;
  clearAll: () => void;
}

export const useShowImageModalState = create<IShowImageModalState>((set) => ({
  isOpenModal: false,
  setIsOpenModal: (value) => set({ isOpenModal: value }),
  onClose: () => set({ isOpenModal: false, imageUrl: [] }),
  imageUrl: [],
  initialIndex: 0,
  setInitialIndex: (index) => set({ initialIndex: index }),
  setImageUrl: (imageUrlInput) => set({ imageUrl:imageUrlInput }),
  clearAll: () => set({ imageUrl: [], isOpenModal: false }),
}));
