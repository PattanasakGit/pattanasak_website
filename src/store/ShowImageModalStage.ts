import { create } from "zustand";

interface IShowImageModalState {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  onClose: () => void;
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
  clearAll: () => void;
}

export const useShowImageModalState = create<IShowImageModalState>((set) => ({
  isOpenModal: false,
  setIsOpenModal: (value) => set({ isOpenModal: value }),
  onClose: () => set({ isOpenModal: false, imageUrl: "" }),
  imageUrl: "",
  setImageUrl: (imageUrlInput) => set({ imageUrl:imageUrlInput }),
  clearAll: () => set({ imageUrl: "", isOpenModal: false }),
}));
