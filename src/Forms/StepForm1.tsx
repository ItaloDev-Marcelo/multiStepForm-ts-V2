import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step1Form, type FormDataOfStep1} from '../lib/zodSchemaForStep1';
import Input from '../components/Inputs/Input';


const StepForm1 = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep1>({resolver: zodResolver(step1Form)});

  const submitData = (data:FormDataOfStep1) => {
    console.log(data)
  }
 
  return (
    <form onSubmit={handleSubmit(submitData)} >
       <Input register={register} placeholder='' errors={errors} type='text' label='name' name='userName' />
       <Input register={register} placeholder='' errors={errors} type='email' label='email' name='email'  />
       <Input register={register} placeholder='' errors={errors} type='text' label='phone' name='phoneNumber'  />
       <button>Enviar</button>
    </form>
  )
}

export default StepForm1