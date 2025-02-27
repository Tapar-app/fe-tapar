import { create } from "zustand";

interface ShoppingCenterState {
  shoppingCenterId: number;
  setShoppingCenterId: (id: number) => void;
}

export const useShoppingCenterStore = create<ShoppingCenterState>((set) => ({
  shoppingCenterId: 1,
  setShoppingCenterId: (id: number) => set({ shoppingCenterId: id }),
}));
