import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { step3Form } from "../../lib/schemas/zodSchemaForStep3";
import { StoreUseForm } from "../../store/global/currentFormstatus";  

export const useStep3 = () => {

  const  {data, setForm} = StoreUseForm()

 const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(step3Form),
  defaultValues: data
 });


  return {
    register, 
    handleSubmit,
    errors,
    setForm
  }

}