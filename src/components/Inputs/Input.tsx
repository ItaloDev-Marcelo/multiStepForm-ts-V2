import type { FC } from 'react'
import type {InputShape } from '../../types/Inputs-types/InputProps'

const Input:FC <InputShape> = ({type,label, register, errors, name, placeholder}) => {
  return (
    <fieldset className='fieldset'>
        <label className='fieldset-legend text-Blue-950 text-[1.1em]'>{label}</label>
        <input type={type} placeholder={placeholder} {...register(name)} className='input n input-Grey-500' />
        <p className='label text-Red-500 font-semibold'>{errors[name]?.message}</p>
    </fieldset>
  )
}

export default Input