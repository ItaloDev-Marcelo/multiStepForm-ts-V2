import InputCheck from "../components/Inputs/InputCheck"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step3Form, type FormDataOfStep3} from '../lib/zodSchemaForStep3';
import { useSelectedPlan } from "../store/useTogglePrice";
import { useEffect, useState } from "react";
import { useAddOnsSummary } from "../store/useAddOnsSummary";
import Button from '../components/communs-components/Button'

import Nextbtn from '../components/Inputs/Nextbtn';
import Backbtn from '../components/Inputs/BackBtn';
import Steps from "../components/communs-components/Steps";
const StepForm3= () => {

   const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep3>({resolver: zodResolver(step3Form)});
   const {isSelected} = useSelectedPlan();
   const {AddOns} = useAddOnsSummary();
    const [copy, setCopy] = useState<string[]>([]);
    const [next, setNext] =  useState(false)
    const submitData = (data:FormDataOfStep3) => {
       setCopy(data.addOns)
       if(data.addOns.length > 0) setNext(true)
    }
  


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
    <main  className='flex justify-center items-center h-screen  nt:h-[550px] nt:rounded-[10px] nt:justify-between nt:px-5'>
      <Steps stepLink={3}/>
      <div className='card  bg-base-100 w-[330px] rounded-[5px] shadow-sm nt:bg-transparent nt:shadow-none nt:w-[500px]'>
       <div className="card-body">
        <h1 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>
          <form onSubmit={handleSubmit(submitData)}>
      <InputCheck id='online' register={register} name='addOns' title={online} subTitle={onlineText} price={onlinePrice}  value={onlineR} />
      <InputCheck id='large' register={register} name='addOns' title={larger} subTitle={largerText} price={largePrice}  value={largeR} />
      <InputCheck id='customizable' register={register} name='addOns' title={customizable} subTitle={customizableText} price={customizablePrice}  value={customizableR } />
      <p className='label text-Red-500 font-bold'>{errors.addOns?.message}</p>
      <div className='mt-5 flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 left-0 p-3'>
         {!next ?<Button />:
         <Nextbtn Url='summary-step' />}
         <Backbtn Url='/step-02' />
      </div>
     
    </form>
       </div>
      
    </div>
    </main>
    
  )
}

export default StepForm3