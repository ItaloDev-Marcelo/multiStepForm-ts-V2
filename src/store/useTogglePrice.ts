import {create} from 'zustand'

interface usePlanState {
     isSelected: boolean,
     togglePlan: () => void
}

export const useSelectedPlan = create<usePlanState>((set) => ({
    isSelected: true,
    togglePlan: () => set((state) => ({isSelected: !state.isSelected}))
}));