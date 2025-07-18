type SelectdFormate = {
    name: string,
    price: number
}

export interface selectedFormate {
     selected: SelectdFormate[],
     setSelected: (add:SelectdFormate[]) => void
}
