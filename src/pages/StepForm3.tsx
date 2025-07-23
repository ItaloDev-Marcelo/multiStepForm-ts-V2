import InputCheck from "../components/Inputs/InputCheck"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step3Form, type FormDataOfStep3} from '../lib/zodSchemaForStep3';
import { useEffect, useState } from "react";
import { useAddOnsSummary } from "../store/useAddOnsSummary";
import Button from '../components/communs-components/Button'
import Nextbtn from '../components/Inputs/Nextbtn';
import Backbtn from '../components/Inputs/BackBtn';
import Steps from "../components/communs-components/Steps";
import Main from "../components/communs-components/Main";
import CardWrapper from "../components/communs-components/CardWrapper";
import UseStep3Data from "./hooks/step3Data";
const StepForm3= () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep3>({resolver: zodResolver(step3Form)});
    const {AddOns} = useAddOnsSummary();
    const [copy, setCopy] = useState<string[]>([]);
    const [next, setNext] =  useState(false)
    const {online, onlineText, onlinePrice, onlineR, larger, largerText,largePrice,largeR,customizable,customizableText,customizablePrice,customizableR} = UseStep3Data()
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

    

  return (
    <Main>
      <Steps stepLink={3}/>
       <CardWrapper>
        <div className='flex flex-col'>
         <h1 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>
        </div>
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
       </CardWrapper>
    </Main>
    
  )
}

export default StepForm3