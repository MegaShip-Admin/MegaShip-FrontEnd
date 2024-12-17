import { create } from 'zustand';

const useStore = create((set) => ({
  headerCollapsed: false, // Initial state for the header collapse status
  expandHeader: () => set({ headerCollapsed: false }), // A method that forces the header to be expanded
  collapseHeader: () => set({ headerCollapsed: true }), // A method to collapse the header

  ActiveTab: 'Importación', // Initial state for ActiveTab
  setActiveTab: (tab) => set({ ActiveTab: tab }), // Method to update ActiveTab

  selectedType: '', // Add selectedType initial state
  setSelectedType: (option) => set({ selectedType: option }), // Add setter for selectedOption

  selectedTransport: '', // Add selectedTransport initial state
  setSelectedTransport: (option) => set({ selectedTransport: option }), // Add setter for selectedOption
}));
export default useStore;

export const useProgressStore = create((set) => ({
  // Current step and steps configuration
  currentStep: 1,
  steps: [
    { id: 1, label: " ", value: null },
    { id: 2, label: " ", value: null },
    { id: 3, label: " ", value: null },
    { id: 4, label: " ", value: null },
    { id: 5, label: " ", value: null },
    { id: 6, label: " ", value: null },
    { id: 7, label: " ", value: null },
    { id: 8, label: " ", value: null },
    { id: 9, label: " ", value: null },
    { id: 10, label: " ", value: null },
  ],
  // Methods for steps
  setStepValue: (stepId, value) => // Acualiza el valor de un estado en especifico
    set((state) => {
      const updatedSteps = state.steps.map((step) =>
        step.id === stepId ? { ...step, value } : step
      );
      return { steps: updatedSteps };
    }),
  //Avanza al paso siguiente
  nextStep: () => set((state) => ({
    currentStep: state.currentStep < 4 ? 4 : Math.min(state.currentStep + 1),
  })),
  // va al paso anterior
  prevStep: () => set((state) => ({
    currentStep: state.currentStep <= 4 ? 1 : Math.max(state.currentStep - 1),
  })),
  setCurrentStep: (step) => set({ currentStep: step }),
  // Transport type state and actions
  BoxActive: null, // Active transport type
  setBoxActive: (box) => set({ BoxActive: box }),
  // Internal box type state and actions
  IntBoxActive: null, // Active internal box type
  setIntBoxActive: (box) => set({ IntBoxActive: box }),
  // Selections for steps
  Selection: {
    selectedOption: null, // Step 1 selection
    selectedTransport: null, // Step 2 selection
    selectedType: null, // Step 3 selection
  },
  setSelection: (newSelections) =>
    set((state) => ({
      Selection: { ...state.Selection, ...newSelections },
    })),
}));


