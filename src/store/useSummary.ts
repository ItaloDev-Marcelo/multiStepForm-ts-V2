import {create} from 'zustand'
interface usePlanState {
     addOnsData: string[],
    AddOns: (Add: string[]) => void
}

export const useSummary = create<usePlanState>((set) => ({
    addOnsData: [],
    AddOns : (Add) => set({addOnsData: Add})
}))