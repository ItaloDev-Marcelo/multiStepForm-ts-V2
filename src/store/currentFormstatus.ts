import { create} from "zustand";
import {type currentFormStatus } from "../types/store-types/currentFormStatus";

export const currentFormSt = create<currentFormStatus>((set) => ({
     userName: '',
     email: '',
     phoneNumber: '',
     selectedPlan: '',
     addOns: '',
     setUserName: (data:string) => set({userName: data }),
     setEmail: (data:string) => set({email: data }),
     setPhone: (data:string) => set({phoneNumber: data }),
     setSelect: (data:string) => set({selectedPlan: data }),
     setAddOns: (data:string) => set({addOns: data })
}))