import {create} from 'zustand'
import type { AddOnsFormate } from './store-types/useAddOnsState'

export const useAddOnsSummary = create<AddOnsFormate>((set) => ({
    addOnsData: [],
    AddOns : (Add) => set({addOnsData: Add})
}))