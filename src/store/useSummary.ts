import {create} from 'zustand'

type AddOns = {
    text: string,
    num: number
}
interface usePlanState {
     addOnsData: AddOns[],
    AddOns: (Add: AddOns[]) => void
}

export const useSummary = create<usePlanState>((set) => ({
    addOnsData: [],
    AddOns : (Add) => set({addOnsData: Add})
}))