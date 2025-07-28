import type { UseFormRegister } from 'react-hook-form'
import type { FormDataOfStep2 } from '../../lib/schemas/zodSchemaForStep2'


export interface RadioProps {
    radioImage:string,
    radioId:string,
    radioValue:string,
    title:string,
    subTitle:string,
    register: UseFormRegister<FormDataOfStep2>,
    radioName: keyof FormDataOfStep2, 
    changes: boolean
}
