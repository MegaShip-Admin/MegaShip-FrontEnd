import { create } from 'zustand';

const useComponentStore = create((set) => ({
  //Cliente
  company: null,
  name: null,
  email: null,
  phone: null,
  setCompany: (option) => set({ company: option }),
  setName: (option) => set({ name: option }),
  setEmail: (option) => set({ email: option }),
  setPhone: (option) => set({ phone: option }),

  //Trayecto
  origin: null,
  destiny: null,
  incoterms: null,
  setOrigin: (option) => set({ origin: option }),
  setDestiny: (option) => set({ destiny: option }),
  setIncoterm: (option) => set({ incoterms: option }),

  //Carga y lista de cargas
  containerType: null,
  containerCount: null,
  bulkType: null,
  bulkVolume: null,
  bulkWeight: null,
  containerList: [],
  nextContainerId: 1,
  setContainerType: (option) => set({ containerType: option }),
  setContainerCount: (option) => set({ containerCount: option }),
  setBulkType: (option) => set({ bulkType: option }),
  setBulkVolume: (option) => set({ bulkVolume: option }),
  setBulkWeight: (option) => set({ bulkWeight: option }),
  setContainerList: (newContainer) => set((state) => {
    const newId = state.nextContainerId;
    const updatedContainer = { ...newContainer, id: newId };
    return {
      containerList: [...state.containerList, updatedContainer],
      nextContainerId: newId + 1,
    };
  }),
  removeContainerById: (id) => set((state) => ({
    containerList: state.containerList.filter(container => container.id !== id),
  })),
  clearContainerList: () => set({ containerList: [] }),
  isChecked: false,
  setIsChecked: () => set((state) => ({ isChecked: !state.isChecked })),
  danger: null,
  setDanger: (option) => set({ danger: option }),

  //Costos
  costs: [
    { id: 1, label: "Gastos de Origen", value: 0 },
    { id: 2, label: "Tarifa", value: 0 },
    { id: 3, label: "Servicios admin", value: 0 },
    { id: 4, label: "Handling fee", value: 0 },
    { id: 5, label: "Deposito", value: 0 },
  ],
  extraServices: false,
  extraServicesActive: () => set((state) => ({ extraServices: !state.extraServices })),
  opcionesExtra: [
    { value: 'uniffactura', label: 'Unif. Factura' },
    { value: 'tlx', label: 'TLX' },
    { value: 'seguro', label: 'Seguro' },
    { value: 'one', label: 'Opcion 1' },
    { value: 'two', label: 'Opcion 2' },
    { value: 'three', label: 'Opcion 3' },
    { value: 'four', label: 'Opcion 4' },
    { value: 'five', label: 'Opcion 5' },
  ],
  addExtraField: (label) => set((state) => {
    const newFieldId = state.costs.length + 1;
    const newField = { id: newFieldId, label, value: "" };
    return { costs: [...state.costs, newField] };
  }),
  updateValue: (id, value) => set((state) => {
    const updatedFields = state.costs.map(cost =>
      cost.id === id ? { ...cost, value } : cost
    );
    return { costs: updatedFields };
  }),

  //Servicio
  serviceType: null,
  estimatedDays: null,
  startDate: null,
  endDate: null,
  setServiceType: (option) => set({ serviceType: option }),
  setEstimatedDays: (option) => set({ estimatedDays: option }),
  setStartDate: (option) => set({ startDate: option }),
  setEndDate: (option) => set({ endDate: option }),

  //Deposito
  deposit: null,
  leaving: null,
  setDeposit: (option) => set({ deposit: option }),
  setLeaving: (option) => set({ leaving: option }),

  //Aclaraciones
  clarification: "Terminos y condiciones",
  setClarification: (option) => set({ clarification: option }),

  //Datos de Exportacion
  exportationData: [
    { id: 1, label: "Salida del Contenedor", value: 0 },
    { id: 2, label: "Transporte interno", value: 0 },
    { id: 3, label: "Gastos de ingreso a terminal", value: 0 },
    { id: 4, label: "Gastos agencia", value: 0 },
    { id: 5, label: "Customs", value: 0 },
    { id: 6, label: "Flete", value: 0 },
  ],
  extraServices: false,
  extraServicesActive: () => set((state) => ({ extraServices: !state.extraServices })),
  opcionesExtraExpo: [
    { value: 'one', label: 'Opcion 1' },
    { value: 'two', label: 'Opcion 2' },
    { value: 'three', label: 'Opcion 3' },
    { value: 'four', label: 'Opcion 4' },
    { value: 'five', label: 'Opcion 5' },
  ],
  addExtraExportField: (label) => set((state) => {
    const newFieldId = state.exportationData.length + 1;
    const newField = { id: newFieldId, label, value: "" };
    return { exportationData: [...state.exportationData, newField] };
  }),
  updateExportValue: (id, value) => set((state) => {
    const updatedFields = state.exportationData.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    return { exportationData: updatedFields };
  }),

}));
export default useComponentStore;