
import {create} from 'zustand';
import {type selectedFormate} from '../types/store-types/useSelectState'

export const useSelectSummary = create<selectedFormate>((set) => ({
    selected: [],
    setSelected: (add) => set({selected: add}) 
}))

