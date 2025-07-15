import InputCheck from "../components/Inputs/InputCheck"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step3Form, type FormDataOfStep3} from '../lib/zodSchemaForStep3';
import { useSelectedPlan } from "../store/useTogglePrice";
const StepForm3= () => {

   const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep3>({resolver: zodResolver(step3Form)});
   const {isSelected} = useSelectedPlan();

    const submitData = (data:FormDataOfStep3) => {
      console.log(data)
    }
   
    const online = 'Online service'
    const onlineText = 'Access to multiplayer games'
    const onlinePrice = isSelected ? '+$1/mo' : '+$10/yr'
    const onlineR = isSelected ? 'Online service +$1/mo' : 'Online service +$10/yr';


     const larger = 'Larger storage'
    const largerText = 'Extra 1Tb of cloud save'
    const largePrice = isSelected ? '+$2/mo' : '+$20/yr'
    const largeR = isSelected ? 'Larger storage +$2/mo' : 'Larger storage +$20/yr'

    const customizable = 'Customizable profile'
    const customizableText = 'Custom theme on your profile'
     const customizablePrice = isSelected ? '+$2/mo' : '+$20/yr'
     const customizableR = isSelected ? 'Customizable profile +$2/mo' : 'Customizable profile +$20/yr'

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <InputCheck id='online' register={register} name='addOns' title={online} subTitle={onlineText} price={onlinePrice}  value={onlineR} />
      <InputCheck id='large' register={register} name='addOns' title={larger} subTitle={largerText} price={largePrice}  value={largeR} />
      <InputCheck id='customizable' register={register} name='addOns' title={customizable} subTitle={customizableText} price={customizablePrice}  value={customizableR } />
      <p>{   errors.addOns?.message}</p>
      <button type='submit'>Next Step</button>
    </form>
  )
}

export default StepForm3