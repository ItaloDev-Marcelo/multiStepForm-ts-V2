import type { UseFormRegister } from 'react-hook-form'
import type { FormDataOfStep3 } from '../../lib/zodSchemaForStep3'


export interface CheckProps {
    id:string,
    title:string,
    subTitle:string,
    price:string,
    register: UseFormRegister<FormDataOfStep3>,
    name: keyof FormDataOfStep3,
    value: string
}
