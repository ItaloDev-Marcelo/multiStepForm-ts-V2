import InputCheck from "../components/Inputs/InputCheck"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step3Form, type FormDataOfStep3} from '../lib/zodSchemaForStep3';
import { useSelectedPlan } from "../store/useTogglePrice";
import { useEffect, useState } from "react";
import { useAddOnsSummary } from "../store/useAddOnsSummary";
import Button from '../components/Button'
const StepForm3= () => {

   const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep3>({resolver: zodResolver(step3Form)});
   const {isSelected} = useSelectedPlan();
   const {AddOns} = useAddOnsSummary();
    const [copy, setCopy] = useState<string[]>([]);
    const submitData = (data:FormDataOfStep3) => setCopy(data.addOns)


  useEffect(() => {
      const FormatedArr = copy.map(item => {
      const [n, price] = item.split(' ');
      const name = n.replace('-', ' ')
      return {
        name,
        price: Number(price)
      }
    })
    
    AddOns(FormatedArr)
  }, [copy ,AddOns])

    

   
    const online = 'Online service'
    const onlineText = 'Access to multiplayer games'
    const onlinePrice = isSelected ? '+$1/mo' : '+$10/yr'
    const onlineR = isSelected ? 'Online-service 1' : 'Online-service 10';


     const larger = 'Larger storage'
    const largerText = 'Extra 1Tb of cloud save'
    const largePrice = isSelected ? '+$2/mo' : '+$20/yr'
    const largeR = isSelected ? 'Larger-storage 2' : 'Larger-storage 20'

    const customizable = 'Customizable profile'
    const customizableText = 'Custom theme on your profile'
     const customizablePrice = isSelected ? '+$2/mo' : '+$20/yr'
     const customizableR = isSelected ? 'Customizable-profile 2' : 'Customizable-profile 20'

  return (
    <div className='card  bg-base-100 w-96 rounded-[15px] shadow-sm'>
       <div className="card-body">
        <h1 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>
          <form onSubmit={handleSubmit(submitData)}>
      <InputCheck id='online' register={register} name='addOns' title={online} subTitle={onlineText} price={onlinePrice}  value={onlineR} />
      <InputCheck id='large' register={register} name='addOns' title={larger} subTitle={largerText} price={largePrice}  value={largeR} />
      <InputCheck id='customizable' register={register} name='addOns' title={customizable} subTitle={customizableText} price={customizablePrice}  value={customizableR } />
      <p>{   errors.addOns?.message}</p>
      <Button />
    </form>
       </div>
      
    </div>
    
  )
}

export default StepForm3