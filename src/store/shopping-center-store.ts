import { create } from 'zustand';

interface ShoppingCenterState {
  shoppingCenterId: number;
  setShoppingCenterId: (id: number) => void;
}

export const useShoppingCenterStore = create<ShoppingCenterState>((set) => ({
  shoppingCenterId: 1, // Default to the first shopping center
  setShoppingCenterId: (id: number) => set({ shoppingCenterId: id }),
}));
