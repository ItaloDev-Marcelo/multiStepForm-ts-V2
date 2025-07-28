import { create} from "zustand";


interface FormFormate {
     userName: string,
     email: string,
     phoneNumber: string
}

interface FormStore {
     data: FormFormate,
     setForm: (newData: Partial<FormFormate>) => void,
     resetForm: () => void
}

export const StoreUseForm = create<FormStore>((set) => ({
     data: {
          userName: '',
          email: '',
          phoneNumber:'',
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
              }
          }))
}))