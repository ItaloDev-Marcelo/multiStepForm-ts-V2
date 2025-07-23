import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step1Form, type FormDataOfStep1} from '../lib/zodSchemaForStep1';
import Input from '../components/Inputs/Input';
import Button from '../components/communs-components/Button'
import Nextbtn from "../components/Inputs/Nextbtn";
import { useState } from "react";
import Steps from "../components/communs-components/Steps";
import Main from "../components/communs-components/Main";
import CardWrapper from "../components/communs-components/CardWrapper";

const StepForm1 = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep1>({resolver: zodResolver(step1Form)});
  const [next, setNext] = useState(false)
  const submitData = (data:FormDataOfStep1) => {
    if(data) {
      setNext(true)
    }
  }

  
 
  return (
   <Main>
     <Steps stepLink={1} />
    <CardWrapper>
        <div className="flex flex-col ">
           <h1 className="card-title text-[1.7em] text-Blue-950 font-bold mb-3">Personal info</h1>
           <p>Please provide your name, email <br className="nt:hidden" /> address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit(submitData)}  >
       <Input register={register} placeholder='e.g. Stephen King' errors={errors} type='text' label='Name' name='userName' />
       <Input register={register} placeholder='e.g. stephenking@lorem.com' errors={errors} type='email' label='Email Address ' name='email'  />
       <Input register={register} placeholder='e.g. +1 234 567 890' errors={errors} type='text' label='Phone Number' name='phoneNumber'  />
       <div className='mt-5 flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 left-0 p-3'>
       {!next ? <Button/>  : <Nextbtn Url="step-02" />}
          </div>
       </form>
    </CardWrapper>
   </Main>
  )
}

export default StepForm1