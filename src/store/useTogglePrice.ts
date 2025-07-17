import {create} from 'zustand';
import {type ToggleState} from './store-types/useToggleState';

export const useSelectedPlan = create<ToggleState>((set) => ({
    isSelected: true,
    togglePlan: () => set((state) => ({isSelected: !state.isSelected}))
}));