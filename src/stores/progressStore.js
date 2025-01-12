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
      let nextStep = state.currentStep;
      if (state.currentStep <= 3) {
        nextStep = 4;
      } else {
        nextStep = Math.min(state.currentStep + 1, state.steps.length);
      }
      const currentPath = state.steps[state.currentStep - 1].path;
      const nextPath = state.steps[nextStep - 1].path;
      if (currentPath !== nextPath) {
        navigate(`/nueva_cotizacion/${nextPath}`);
      }
      return { currentStep: nextStep };
    });
  },


  // Va al paso anterior
  prevStep: (navigate) => {
    set((state) => {
      let prevStep;  // Initialize prevStep variable.
      console.log("Current step before calculation:", state.currentStep);
      if (state.currentStep <= 4) {
        prevStep = state.currentStep - 3;
      } else {
        prevStep = state.currentStep - 1;
      }
      const currentPath = state.steps[state.currentStep - 1]?.path;
      const prevPath = state.steps[prevStep - 1]?.path;
      if (prevPath && currentPath !== prevPath) {
        navigate(`/nueva_cotizacion/${prevPath}`);
      }
      return { currentStep: prevStep };
    });
  },

  setCurrentStep: (step) => {
    set({ currentStep: step });
  },
}));

export default useProgressStore;
