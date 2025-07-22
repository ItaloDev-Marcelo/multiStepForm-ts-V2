
// import { useState, useEffect } from 'react'
import { useSelectSummary } from '../store/useSelectSumarry'
import { useAddOnsSummary } from '../store/useAddOnsSummary'
import { useSelectedPlan } from '../store/useTogglePrice'

import Button from '../components/Button'
import Backbtn from '../components/Inputs/BackBtn';
import Steps from '../components/Steps';


const Summary = () => {

  const {addOnsData} = useAddOnsSummary()
  const {selected} = useSelectSummary()
 const  {isSelected} = useSelectedPlan()
  const mixed = [...addOnsData,...selected]

  const Remo = mixed.map((item) => {
     const dt = item.price
     return dt
  })


  const result = Remo.reduce((acc,num) => {
    return acc + num
  },0)


  console.log(result)

  const priceText = isSelected ?  '/mo' : '/yr';
  const plan = isSelected ?  'Monthly' : 'Yearly';

  return (
   <main className='flex justify-center items-center h-screen'>
    <Steps stepLink={4}/>
      <div className='card bg-base-100 w-[330px] rounded-[5px]shadow-sm'>
      <div className="card-body">
        <h2 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Finishing up</h2>
        <p className='text-[1.1em]'>Double-check everything looks OK before confirming.</p>
         <div className='flex flex-col  bg-Blue-200 rounded-[5px] p-2 my-3'>
             {
          selected.map((item) => (
             <div  key={Math.random()} className='flex flex-row justify-between items-center p-3 '>
               <div> <p > <span className='text-[1em] font-bold text-Blue-950 '>{item.name}</span>
                <span className='text-[1em] font-bold text-Blue-950 '>({plan}) </span>  <br/>
                 <a href='#' className='underline'>Change</a> </p></div>
              <div><p>${item.price} {priceText} </p></div>
             </div>
          ))
        }
        <hr  />
        {
         addOnsData.length > 0 &&  addOnsData.map((item) => (
             <div key={Math.random()} className='flex flex-row justify-between items-center p-3'>
                <div><p>{item.name}</p></div>
                <div><p>+${item.price} {priceText}</p></div>
             </div>
          ))
        }
         </div>

       
       <div  className='flex flex-row justify-between  p-3 mb-3'>
         <div><p>Total (per {isSelected ? 'month' : 'year'} ) </p></div>
         <div> <p className='text-Purple-600 font-bold'>+${result}{priceText}</p></div>
       </div>
       <div className='flex justify-between fixed w-full bg-white bottom-0 left-0 p-3'>
            <Button/>
          <Backbtn Url='/step-02/step-03' />
       </div>
    
      </div>
    </div>
   </main>
  )
}

export default Summary