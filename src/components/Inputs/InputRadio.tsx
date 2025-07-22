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
    <div>
    {/* input vem primeiro e fica escondido */}
<input
  type="radio"
  id={radioId}
  value={radioValue}
  {...register(radioName)}
  className="hidden peer"
/>

{/* container que muda a cor quando input está checked */}
<div className="flex flex-row nt:flex-col my-[1.2em] outline-1 outline-Grey-500 p-2 rounded-[5px] custom-line 
 peer-checked:outline-Purple-600 peer-checked:bg-Blue-50 transition nt:h-[150px] nt:w-[125px] nt:mx-1.5">

  <label htmlFor={radioId} className="custom-radio cursor-pointer flex">
    <figure className="px-2 mr-3 nt:px-0 nt:mr-0 nt:my-2.5">
      <img src={radioImage} alt="" />
    </figure>
  </label>

  <div>
    <p>
      <strong className="text-Blue-950 font-bold">{title}</strong><br />
      <span className="text-Grey-500">{subTitle}{Result}</span><br />
      {planApply}
    </p>
  </div>
</div>

    </div>
  )
}

export default InputRadio