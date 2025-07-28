

export interface currentFormStatus {
    userName: string,
    email: string,
    phoneNumber:string,
    selectedPlan: string,
    addOns: string,
    setUserName: (data:string) => void,
    setEmail: (data:string) => void,
    setPhone: (data:string) => void,
    setSelect: (data:string) => void,
    setAddOns: (data:string) => void
}