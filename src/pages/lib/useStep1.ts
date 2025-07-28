import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { step1Form } from "../../lib/schemas/zodSchemaForStep1";
import { StoreUseForm } from "../../store/currentFormstatus";  

export const useStep = () => {

  const  {data, setForm} = StoreUseForm()

 const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(step1Form),
  defaultValues: data
 });


  return {
    register, 
    handleSubmit,
    errors,
    setForm
  }

}