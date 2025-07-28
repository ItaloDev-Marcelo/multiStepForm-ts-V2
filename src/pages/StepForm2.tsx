import { useEffect, useState } from 'react';
import { type FormDataOfStep2} from '../lib/schemas/zodSchemaForStep2';
import {Step2FormIcons} from '../components/ImagensBank'
import { useSelectedPlan } from '../store/useTogglePrice'
import { useSelectSummary } from '../store/hooks/plans/useSelectSumarry';
import InputRadio from '../components/Inputs/InputRadio'
import ToggleButton from '../components/communs-components/toggleButton';
import Button from '../components/communs-components/Button'
import Backbtn from '../components/Inputs/BackBtn';
import Steps from '../components/communs-components/Steps';
import Main from '../components/communs-components/Main';
import CardWrapper from '../components/communs-components/CardWrapper';
import UseStep2Data from './hooks/step2Data';
import { useNavigate } from 'react-router';
import { useStep2 } from './lib/useStep2';
const StepForm2 = () => {

  const {Arcade,Advanced,Pro} = Step2FormIcons
  const {isSelected} =  useSelectedPlan();
  const {option01,option02,option03,radioOptionValue1,radioOptionValue2,radioOptionValue3} = UseStep2Data()
  const [copy, setCopy] = useState<string[]>([])
    const navigate = useNavigate()
    const {register, handleSubmit, errors, setForm} = useStep2()
    
  const {setSelected} = useSelectSummary()

  const submit = (data:FormDataOfStep2) => {
     setCopy([data.selectedPlan])
    setForm(data)
    console.log(data)
     if(data.selectedPlan) navigate('/step-02/step-03')  

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

  
  return (
   <Main >
    <Steps stepLink={2}/>
      <CardWrapper>
      <div className='flex flex-col'>
       <h1 className='card-title text-[1.5em] text-Blue-950 font-bold mb-3'>Pick add-ons</h1>
       <p className='text-[.9em] font-medium text-gray-500'>Add-ons help enhance your gaming experience.</p>
      </div>
         <form onSubmit={handleSubmit(submit)}>
         <div className='nt:flex'>
            <InputRadio radioImage={Arcade} radioName='selectedPlan' radioId='arcade-radio' radioValue={radioOptionValue1} title='Arcade' subTitle={option01} register={register} changes={isSelected} />
            <InputRadio radioImage={Advanced} radioName='selectedPlan' radioId='advanced-radio' radioValue={radioOptionValue2} title='Advanced' subTitle={option02}  register={register} changes={isSelected}  />
            <InputRadio radioImage={Pro} radioName='selectedPlan' radioId='pro-radio' radioValue={radioOptionValue3} title='Pro' subTitle={option03}  register={register} changes={isSelected}  />
         </div>

        <p className='label text-Red-500 my-2 font-bold'>{errors.selectedPlan?.message}</p>
         <ToggleButton/>
         <div className='mt-5 move-left flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 left-0 p-3'>
         <Button />
         <Backbtn Url='/' />
         </div>
         </form>
      </CardWrapper>
   </Main>
  )
}

export default StepForm2