import { create } from 'zustand';

type MobilePageStore = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  resetPage: () => void;
};

export const useMobilePage = create<MobilePageStore>((set) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),
  resetPage: () => set({ currentPage: 'home' }),
})); 