import InputRadio from '../components/Inputs/InputRadio'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {step2Form, type FormDataOfStep2} from '../lib/zodSchemaForStep2';
import {Step2FormIcons} from '../components/ImagensBank'
import { useSelectedPlan } from "../store/useTogglePrice"
import { useEffect, useState } from 'react';
import ToggleButton from '../components/toggleButton';
import { useSelectSummary } from '../store/useSelectSumarry';
import Button from '../components/Button'
import Nextbtn from '../components/Inputs/Nextbtn';
import Backbtn from '../components/Inputs/BackBtn';
const StepForm2 = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormDataOfStep2>({resolver: zodResolver(step2Form)});
  const {Arcade,Advanced,Pro} = Step2FormIcons
  const {isSelected} =  useSelectedPlan();
  const [copy, setCopy] = useState<string[]>([])
  const [next, setNext] = useState(false)
  const {setSelected} = useSelectSummary()

  const submit = (data:FormDataOfStep2) => {
     setCopy([data.selectedPlan])
     if(!copy) {
    setNext(true)
     }

  }

  useEffect(() => {
   const formateArray = copy.map((item) => {
     const [name, price] = item.split(' ');
     return {
      name,
      price: Number(price)
     }
   })

   setSelected(formateArray);

  },[copy, setSelected])



  const option01 = isSelected ? '$9' : '$90' ;
  const option02 = isSelected ? '$12' : '$120' ;
  const option03 = isSelected ? '$15' : '$150' ;
  const radioOptionValue1 = isSelected ? 'Arcane 9' : 'Arcene 90';
  const radioOptionValue2 = isSelected ? 'Advanced 12' : 'Advanced 120';
  const radioOptionValue3 = isSelected ? 'Pro 15' : 'Pro 150';




  return (
   <div className='card  bg-base-100 w-96 rounded-[15px]shadow-sm'>
     <div className="card-body">
      <div className='flex flex-col'>
       <h1 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Pick add-ons</h1>
       <p>Add-ons help enhance your gaming experience.</p>
      </div>
         <form onSubmit={handleSubmit(submit)}>
        <InputRadio radioImage={Arcade} radioName='selectedPlan' radioId='arcade-radio' radioValue={radioOptionValue1} title='Arcade' subTitle={option01} register={register} changes={isSelected} />
        <InputRadio radioImage={Advanced} radioName='selectedPlan' radioId='advanced-radio' radioValue={radioOptionValue2} title='Advanced' subTitle={option02}  register={register} changes={isSelected}  />
        <InputRadio radioImage={Pro} radioName='selectedPlan' radioId='pro-radio' radioValue={radioOptionValue3} title='Pro' subTitle={option03}  register={register} changes={isSelected}  />
        <p>{errors.selectedPlan?.message}</p>
         <ToggleButton/>
         <div>
        { next ? <Button />   :
         <Nextbtn Url='/step-02/step-03' />}
         <Backbtn Url='/' />
         </div>
    </form>
     </div>
   </div>
  )
}

export default StepForm2