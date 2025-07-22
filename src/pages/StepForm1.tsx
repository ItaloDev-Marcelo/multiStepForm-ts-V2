import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step1Form, type FormDataOfStep1} from '../lib/zodSchemaForStep1';
import Input from '../components/Inputs/Input';
import Button from '../components/Button'
import Nextbtn from "../components/Inputs/Nextbtn";
import { useState } from "react";

const StepForm1 = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep1>({resolver: zodResolver(step1Form)});
  const [next, setNext] = useState(false)
  const submitData = (data:FormDataOfStep1) => {
    console.log(data)
    if(data) {
      setNext(true)
    }
  }

  
 
  return (
   <main>
    <div className='card  bg-base-100 w-[330px] rounded-[5px] shadow-sm '>
       <div className="card-body">
        <div className="flex flex-col ">
           <h1 className="card-title text-[1.7em] text-Blue-950 font-bold mb-3">Personal info</h1>
           <p>Please provide your name, email <br /> address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit(submitData)} >
       <Input register={register} placeholder='e.g. Stephen King' errors={errors} type='text' label='name' name='userName' />
       <Input register={register} placeholder='e.g. stephenking@lorem.com' errors={errors} type='email' label='email' name='email'  />
       <Input register={register} placeholder='e.g. +1 234 567 890' errors={errors} type='text' label='phone' name='phoneNumber'  />
       <div className='mt-5 flex justify-between fixed w-full bg-white bottom-0 left-0 p-3'>
        
       {!next ? <Button/>  : <Nextbtn Url="step-02" />}
          </div>
       
       </form>
       </div>
        
   </div>
   </main>
  )
}

export default StepForm1