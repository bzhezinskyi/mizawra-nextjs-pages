import { create } from "zustand";

const useStore = create((set) => ({
  isAuth: false,
  login: () => set(() => ({ isAuth: true })),
  logout: () => set(() => ({ isAuth: false })),
}));

export default useStore;
