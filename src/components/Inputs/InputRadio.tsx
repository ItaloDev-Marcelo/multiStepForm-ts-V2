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
  
  const Result = !changes ? '/yr' : '/mo' ;
  const planApply = !changes ? (<span className='text-Blue-950 font-semibold'>2 months free</span>) : null ;

  return (
    <div className="my-5 outline-1 outline-Grey-500 p-2 rounded-[5px]">
       <label className='flex flex-row'>
          <figure className="px-2 mr-3">
              <img src={radioImage} alt='' />
          </figure>
          <div>
              <input type='radio' className="hidden"  id={radioId} value={radioValue} {...register(radioName)}  />
              <p> <strong className='text-Blue-950 font-bold'>{title}</strong> <br /> 
               <span className='text-Grey-500 '>{subTitle}{Result}</span><br /> {planApply} </p>
          </div>
       </label>
    </div>
  )
}

export default InputRadio