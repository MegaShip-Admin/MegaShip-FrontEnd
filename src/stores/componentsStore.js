import { create } from 'zustand';

const useComponentStore = create((set) => ({
  //Cliente
  company: "",
  name: "",
  email: "",
  phone: "",
  setCompany: (option) => set({ company: option }),
  setName: (option) => set({ name: option }),
  setEmail: (option) => set({ email: option }),
  setPhone: (option) => set({ phone: option }),

  //Trayecto
  origin: "",
  destiny: "",
  incoterms: "",
  setOrigin: (option) => set({ origin: option }),
  setDestiny: (option) => set({ destiny: option }),
  setIncoterm: (option) => set({ incoterms: option }),

  //Carga y lista de cargas
  containerType: "",
  containerSize: "",
  containerCount: "",
  containerList: [],
  nextContainerId: 1,
  setContainerType: (option) => set({ containerType: option }),
  setContainerSize: (option) => set({ containerSize: option }),
  setContainerCount: (option) => set({ containerCount: option }),
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

  //Caracteristicas de la carga
  isChecked: false,
  setIsChecked: () => set((state) => ({ isChecked: !state.isChecked })),
  danger: "",
  setDanger: (option) => set({ danger: option }),

  //Costos
  originCost: "",
  tariff: "",
  adminServices: "",
  handlingFee: "",
  deposit: "",
  setOriginCost: (option) => set({ originCost: option }),
  setTariff: (option) => set({ tariff: option }),
  setAdminServices: (option) => set({ adminServices: option }),
  setHandlingFee: (option) => set({ handlingFee: option }),
  setDeposit: (option) => set({ deposit: option }),

  //Servicios extra
  extraServices: false,
  extraServicesActive: () => set((state) => ({ extraServices: !state.extraServices })),
  unifBill: "",
  tlx: "",
  insurance: "",
  setUnifBill: (option) => set({ unifBill: option }),
  setTlx: (option) => set({ tlx: option }),
  setInsurance: (option) => set({ insurance: option }),

  //Servicio
  serviceType: "",
  estimatedDays: "",
  startDate: null,
  endDate: null,
  setServiceType: (option) => set({ serviceType: option }),
  setEstimatedDays: (option) => set({ estimatedDays: option }),
  setStartDate: (option) => set({ startDate: option }),
  setEndDate: (option) => set({ endDate: option }),

  //Deposito
  deposit: "",
  leaving: "",
  setDeposit: (option) => set({ deposit: option }),
  setLeaving: (option) => set({ leaving: option }),

  //Aclaraciones
  clarification: "Terminos y condiciones",
  setClarification: (option) => set({ clarification: option }),

  //Datos de Exportacion
  exitContainer: "",
  internalTransport: "",
  expenseEnterTerminal: "",
  expensesAgency: "",
  customs: "",
  flete: "",
  setExitContainer: (option) => set({ exitContainer: option }),
  setInternalTransport: (option) => set({ internalTransport: option }),
  setExpenseEnterTerminal: (option) => set({ expenseEnterTerminal: option }),
  setExpensesAgency: (option) => set({ expensesAgency: option }),
  setCustoms: (option) => set({ customs: option }),
  setFlete: (option) => set({ flete: option }),
}));
export default useComponentStore;