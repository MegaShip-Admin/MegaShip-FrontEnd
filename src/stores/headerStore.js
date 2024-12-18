import { create } from 'zustand';

const useHeaderStore = create((set) => ({
    headerCollapsed: false, // Initial state for the header collapse status
    expandHeader: () => set({ headerCollapsed: false }), // A method that forces the header to be expanded
    collapseHeader: () => set({ headerCollapsed: true }), // A method to collapse the header
}));
export default useHeaderStore;