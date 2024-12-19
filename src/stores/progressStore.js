import { create } from 'zustand';

const useProgressStore = create((set) => ({

  ActiveTab: 'Importación', // Initial state for ActiveTab
  setActiveTab: (tab) => set({ ActiveTab: tab }), // Method to update ActiveTab

  selectedTransport: '', // Add selectedTransport initial state
  setSelectedTransport: (option) => set({ selectedTransport: option }), // Add setter for selectedOption

  selectedType: '', // Add selectedType initial state
  setSelectedType: (option) => set({ selectedType: option }), // Add setter for selectedOption


  currentStep: 1, // Current step
  steps: [
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null },
    { id: 10, value: null },
  ],
  // Update the steps array based on the state values
  updateSteps: () => {
    set((state) => {
      const updatedSteps = [
        { id: 1, value: state.ActiveTab },
        { id: 2, value: state.selectedTransport },
        { id: 3, value: state.selectedType },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null },
        { id: 10, value: null },
      ];
      return { steps: updatedSteps };
    });
  },

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
    set({ currentStep: step });
  },
}));

export default useProgressStore;
