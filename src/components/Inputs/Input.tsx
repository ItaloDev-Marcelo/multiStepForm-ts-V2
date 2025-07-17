import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { FormDataOfStep1 } from "../../lib/zodSchemaForStep1"

interface InputShape {
  type: string,
  label: string,
  register: UseFormRegister<FormDataOfStep1 >,
  errors: FieldErrors<FormDataOfStep1 >,
  name: keyof FormDataOfStep1, 
  placeholder: string
}


const Input = ({type,label, register, errors, name, placeholder}:InputShape) => {
  return (
    <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register(name)}  />
        <p>{errors[name]?.message}</p>
    </div>
  )
}

export default Input