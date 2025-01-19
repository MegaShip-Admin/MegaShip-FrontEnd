import { create } from 'zustand';

const useProgressStore = create((set) => ({

  ActiveTab: 'Importación', // Initial state for ActiveTab
  setActiveTab: (tab) => set({ ActiveTab: tab }), // Method to update ActiveTab
  selectedTransport: '', // Add selectedTransport initial state
  setSelectedTransport: (option) => set({ selectedTransport: option }), // Add setter for selectedOption
  selectedType: '', // Add selectedType initial state
  setSelectedType: (option) => set({ selectedType: option }), // Add setter for selectedOption


  currentStep: 1, // Current step
  setCurrentStep: (step) => set({ currentStep: step }),
  steps: [
    { id: 1, value: null, path: '' },
    { id: 2, value: null, path: '' },
    { id: 3, value: null, path: '' },
    { id: 4, value: null, path: '' },
    { id: 5, value: null, path: '' },
    { id: 6, value: null, path: '' },
  ],
  // Update the steps array based on the state values
  updateSteps: () => {
    set((state) => {
      let updatedSteps = [
        { id: 1, value: state.ActiveTab, path: "first" },
        { id: 2, value: state.selectedTransport, path: "first" },
        { id: 3, value: state.selectedType, path: "first" },
      ];
      if (state.ActiveTab === 'Importación') {
        if (
          state.selectedType === 'Consolidado' &&
          (state.selectedTransport === 'Maritimo' || state.selectedTransport === 'Terrestre')
        ) {
          updatedSteps.push(
            { id: 4, value: 'Cliente', path: "two" },
            { id: 5, value: 'Trayecto', path: "two" },
            { id: 6, value: 'Carga', path: "two" },
            { id: 7, value: 'Costos', path: "costs" },
            { id: 8, value: 'Servicios', path: "services" },
            { id: 9, value: 'Aclaraciones', path: "services" },
            { id: 10, value: 'Deposito', path: "services" },
            { id: 11, value: 'Resumen', path: "resumen" }
          );
        } else {
          updatedSteps.push(
            { id: 4, value: 'Cliente', path: "two" },
            { id: 5, value: 'Trayecto', path: "two" },
            { id: 6, value: 'Carga', path: "loads" },
            { id: 7, value: 'Costos', path: "costs" },
            { id: 8, value: 'Servicios', path: "services" },
            { id: 9, value: 'Aclaraciones', path: "services" },
            { id: 10, value: 'Resumen', path: "resumen" }
          );
        }
      } else {
        if (
          state.selectedType === 'Consolidado' &&
          (state.selectedTransport === 'Maritimo' || state.selectedTransport === 'Terrestre')
        ) {
          updatedSteps.push(
            { id: 4, value: 'Cliente', path: "two" },
            { id: 5, value: 'Trayecto', path: "two" },
            { id: 6, value: 'Carga', path: "two" },
            { id: 7, value: 'Datos Export', path: "expor" },
            { id: 8, value: 'Servicios', path: "services" },
            { id: 9, value: 'Aclaraciones', path: "services" },
            { id: 10, value: 'Resumen', path: "resumen" }
          );
        } else {
          updatedSteps.push(
            { id: 4, value: 'Cliente', path: "two" },
            { id: 5, value: 'Trayecto', path: "two" },
            { id: 6, value: 'Carga', path: "loads" },
            { id: 7, value: 'Datos Export', path: "expor" },
            { id: 8, value: 'Aclaraciones', path: "expor" },
            { id: 9, value: 'Resumen', path: "resumen" }
          );
        }
      }
      return { steps: updatedSteps };
    });
  },
  // Methods for steps
  setStepValue: (stepId, value) => {
    set((state) => {
      const updatedSteps = state.steps.map((step) =>
        step.id === stepId ? { ...step, value } : step
      );
      return { steps: updatedSteps };
    });
  },

  //Avanza al paso siguiente
  nextStep: (navigate) => {
    set((state) => {
      const currentStepIndex = state.currentStep - 1;
      const currentPath = state.steps[currentStepIndex].path;
      let nextStepIndex = currentStepIndex + 1;
      while (
        nextStepIndex < state.steps.length &&
        state.steps[nextStepIndex].path === currentPath
      ) {
        nextStepIndex++;
      }
      const nextStep = Math.min(nextStepIndex + 1, state.steps.length);
      if (currentPath !== state.steps[nextStep - 1].path) {
        navigate(`/nueva_cotizacion/${state.steps[nextStep - 1].path}`);
      }
      return { currentStep: nextStep };
    });
  },


  // Va al paso anterior
  prevStep: (navigate) => {
    set((state) => {
      const currentStepIndex = state.currentStep - 1;
      const currentPath = state.steps[currentStepIndex]?.path;
      let prevStepIndex = currentStepIndex - 1;
      while (
        prevStepIndex >= 0 &&
        state.steps[prevStepIndex]?.path === currentPath
      ) {
        prevStepIndex--;
      }
      if (prevStepIndex >= 0 && prevStepIndex <= 2) {
        prevStepIndex = 0;
      }
      const firstDifferentPathIndex = prevStepIndex >= 0 ? prevStepIndex : 0;
      if (firstDifferentPathIndex >= 0 && currentPath !== state.steps[firstDifferentPathIndex]?.path) {
        navigate(`/nueva_cotizacion/${state.steps[firstDifferentPathIndex].path}`);
      }
      return { currentStep: firstDifferentPathIndex + 1 };
    });
  },

}));

export default useProgressStore;
