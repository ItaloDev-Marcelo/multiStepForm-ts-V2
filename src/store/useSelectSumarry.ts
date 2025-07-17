
import {create} from 'zustand';

type SelectdFormate = {
    name: string,
    price: number
}

interface useFormate {
     selected: SelectdFormate[],
     setSelected: (add:SelectdFormate[]) => void
}

export const useSelectSummary = create<useFormate>((set) => ({
    selected: [],
    setSelected: (add) => set({selected: add}) 
}))

