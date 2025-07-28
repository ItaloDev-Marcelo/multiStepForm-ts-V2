import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { FormDataOfStep1 } from '../../lib/schemas/zodSchemaForStep1'


export interface InputShape {
  type: string,
  label: string,
  register: UseFormRegister<FormDataOfStep1 >,
  errors: FieldErrors<FormDataOfStep1 >,
  name: keyof FormDataOfStep1, 
  placeholder: string
}