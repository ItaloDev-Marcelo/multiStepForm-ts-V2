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
    <fieldset className='fieldset'>
        <label className='fieldset-legend text-Blue-950 text-[1.3em]'>{label}</label>
        <input type={type} placeholder={placeholder} {...register(name)} className="input n input-Grey-500" />
        <p className='label text-Red-500 font-semibold'>{errors[name]?.message}</p>
    </fieldset>
  )
}

export default Input