import { create } from 'zustand';

const useStore = create((set) => ({
  headerCollapsed: false, // Initial state for the header collapse status
  expandHeader: () => set({ headerCollapsed: false }), // A method that forces the header to be expanded
  collapseHeader: () => set({ headerCollapsed: true }), // A method to collapse the header
}));

export default useStore;

export const Active = create((set) => ({
  ActiveTab: 'Importación', // estado inicial
  setActiveTab: (tab) => set({ActiveTab: tab}),
}));

export const ActiveBoxs = create((set) => ({
  BoxActive: null, // estado inicial
  setBoxActive: (box) => set({BoxActive: box}),
}));

export const IntActiveBoxs = create((set) => ({
  IntBoxActive: null, // estado inicial
  setIntBoxActive: (box) => set({ IntBoxActive: box }),
}));

export const UseProgress = create((set) => ({
  currentStep: 0, // Paso inicial
  Selection: {
    selectedOption: null, // Selección para el paso 1
    selectedTransport: null, // Selección para el paso 2
    selectedType: null, // Selección para el paso 3
  },
  setCurrentStep: (step) => set({ currentStep: step }), // Actualizar paso actual
  setSelection: (newSelections) =>
    set((state) => ({
      Selection: { ...state.Selection, ...newSelections }, // Actualiza las selecciones
    })),
  Next: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 9), // Avanzar (máximo paso 9)
    })),
  Prev: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0), // Retroceder (mínimo paso 0)
    })),
}));
