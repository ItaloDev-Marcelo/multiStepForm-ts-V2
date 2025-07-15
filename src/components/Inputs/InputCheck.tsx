import type { FC } from "react"
import type { UseFormRegister } from "react-hook-form"
import type { FormDataOfStep3 } from "../../lib/zodSchemaForStep3"


interface CheckProps {
    id:string,
    title:string,
    subTitle:string,
    price:string,
    register: UseFormRegister<FormDataOfStep3>,
    name: keyof FormDataOfStep3,
    value: string
}


const InputCheck:FC <CheckProps> = ({id,register,name,title,subTitle,price, value}) => {
  return (
     <div >
        <input type='checkbox'  id={id} value={value} {...register(name)} />
       <label htmlFor={id}> 
        <div>
              <p>{title} <br /> {subTitle}</p>
              <p><a href="#">{price}</a></p>
       </div>
       </label>
    </div>
  )
}

export default InputCheck