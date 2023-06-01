import { create } from "zustand";

const useModal = create((set) => ({
  isModal: false,
  openModal: () => set(() => ({ isModal: true })),
  closeModal: () => set(() => ({ isModal: false })),

  dataDeletedNarrative: {},
  addData: (value) => set(() => ({ dataDeletedNarrative: value })),
  removeData: () => set(() => ({ dataDeletedNarrative: {} })),
}));

export default useModal;
