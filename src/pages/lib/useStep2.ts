import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { step2Form } from "../../lib/schemas/zodSchemaForStep2";
import { StoreUseForm } from "../../store/currentFormstatus";  

export const useStep2 = () => {

  const  {data, setForm} = StoreUseForm()

 const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(step2Form),
  defaultValues: data
 });


  return {
    register, 
    handleSubmit,
    errors,
    setForm
  }

}