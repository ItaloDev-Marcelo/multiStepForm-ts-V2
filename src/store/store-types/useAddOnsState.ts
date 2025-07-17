type AddOns = {
    name: string,
    price: number
}


export interface AddOnsFormate {
     addOnsData: AddOns[],
    AddOns: (Add: AddOns[]) => void
}