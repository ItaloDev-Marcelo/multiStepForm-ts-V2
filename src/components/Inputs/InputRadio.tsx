import type { FC } from "react"
import type { UseFormRegister } from "react-hook-form"
import type { FormDataOfStep2 } from "../../lib/zodSchemaForStep2"


interface RadioProps {
    radioImage:string,
    radioId:string,
    radioValue:string,
    title:string,
    subTitle:string,
    register: UseFormRegister<FormDataOfStep2>,
    radioName: keyof FormDataOfStep2, 
    changes: boolean
}

const InputRadio:FC<RadioProps> = ({radioImage,radioName,radioId,radioValue,title,subTitle, register, changes}) => {
  
  const Result = !changes ? (<span>2 months free</span>) : null;

  return (
    <div >
       <label>
          <figure>
              <img src={radioImage} alt='' />
          </figure>
          <div>
              <input type='radio'  id={radioId} value={radioValue} {...register(radioName)} />
              <p> <strong>{title}</strong> <span>{subTitle}</span> <br /> {Result} </p>
              
          </div>
       </label>
    </div>
  )
}

export default InputRadio