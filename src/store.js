import { create } from "zustand";

export const useAppStore = create((set) => ({
  selectedNodeId: null,
  activeTab: "cpu",

  setSelectedNode: (id) => set({ selectedNodeId: id }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
