import type { FC } from 'react'
import type {CheckProps} from   '../../types/Inputs-types/InputCheckProps'

const InputCheck:FC <CheckProps> = ({id,register,name,title,subTitle,price, value}) => {
  return (
     <div className='flex flex-row  my-4 p-3 rounded-[5px] checkbox-container'>
        <input type='checkbox'  className=' mt-3 checkbox checkbox-primary checkbox-sm peer'  id={id} value={value} {...register(name)} />
        <label htmlFor={id}> 
        <div className='flex flex-row items-center justify-between px-4 custom w-[270px] '>
              <div>
                <p className='text-Blue-950 font-bold'>{title}</p>
              <p>{subTitle}</p>
              </div>
              <p className='absolute right-[3em] text-Blue-950'><a href='#'>{price}</a></p>
        </div>
        </label>
    </div>
  )
}

export default InputCheck