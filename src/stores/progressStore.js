import { create } from 'zustand';

const useProgressStore = create((set) => ({
  ActiveTab: 'Importación', // Initial state for ActiveTab
  setActiveTab: (tab) => set({ ActiveTab: tab }), // Method to update ActiveTab

  selectedType: '', // Add selectedType initial state
  setSelectedType: (option) => set({ selectedType: option }), // Add setter for selectedOption

  selectedTransport: '', // Add selectedTransport initial state
  setSelectedTransport: (option) => set({ selectedTransport: option }), // Add setter for selectedOption

  BoxActive: null, // Active transport type
  setBoxActive: (box) => set({ BoxActive: box }),

  IntBoxActive: null, // Active internal box type
  setIntBoxActive: (box) => set({ IntBoxActive: box }),

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
  setStepValue: (stepId, value) => {
    set((state) => {
      const updatedSteps = state.steps.map((step) =>
        step.id === stepId ? { ...step, value } : step
      );
      console.log('Updated steps:', updatedSteps);
      return { steps: updatedSteps };
    });
  },
  // Avanza al paso siguiente
  nextStep: () => {
    set((state) => {
      const newStep = state.currentStep < 4 ? 4 : Math.min(state.currentStep + 1);
      console.log('New currentStep:', newStep);
      return { currentStep: newStep };
    });
  },
  // Va al paso anterior
  prevStep: () => {
    set((state) => {
      const newStep = state.currentStep <= 4 ? 1 : Math.max(state.currentStep - 1);
      console.log('New currentStep:', newStep);
      return { currentStep: newStep };
    });
  },
  setCurrentStep: (step) => {
    console.log('Setting currentStep:', step);
    set({ currentStep: step });
  },
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

export default useProgressStore;
