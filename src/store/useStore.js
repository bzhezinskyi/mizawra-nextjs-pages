import { create } from "zustand";

const useStore = create((set) => ({
  isAuth: true,
  login: () => set(() => ({ isAuth: true })),
  logout: () => set(() => ({ isAuth: false })),
}));

export default useStore;
