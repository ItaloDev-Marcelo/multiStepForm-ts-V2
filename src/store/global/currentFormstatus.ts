import { create} from "zustand";

interface FormFormate {
     userName: string,
     email: string,
     phoneNumber: string,
     selectedPlan: string,
     addOns: string[]
}

interface FormStore {
     data: FormFormate,
     setForm: (newData: Partial<FormFormate>) => void,
     resetForm: () => void
}

// trocar do useContext pelo zustand ainda estudando o funcionamento

export const StoreUseForm = create<FormStore>((set) => ({
     data: {
          userName: '',
          email: '',
          phoneNumber:'',
          selectedPlan: '',
          addOns: []
     },
     setForm: (newData) => 
          set((state) => ({
               data: {...state.data, ...newData}
     })),
     resetForm : () => 
          set(() => ({
             data: {
                userName: '',
                email: '',
                phoneNumber:'',
                 selectedPlan:'',
                 addOns: []
              }
          }))
}))