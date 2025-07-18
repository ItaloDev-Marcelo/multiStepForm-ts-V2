
// import { useState, useEffect } from 'react'
import { useSelectSummary } from '../store/useSelectSumarry'
import { useAddOnsSummary } from '../store/useAddOnsSummary'
import { useSelectedPlan } from '../store/useTogglePrice'

import Button from '../components/Button'


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
    <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        {
          selected.map((item) => (
             <div  key={Math.random()}>
                <p>{item.name} ({plan})  <br/> <a href='#'>Change</a> </p>
                <p>${item.price} {priceText} </p>
             </div>
          ))
        }

        {
         addOnsData.length > 0 &&  addOnsData.map((item) => (
             <div key={Math.random()} className='flex justify-between p-2'>
                <p>{item.name}</p>
                <p>+${item.price} {priceText}</p>
             </div>
          ))
        }

       
       <div>
         <p>Total (per {isSelected ? 'month' : 'year'} ) </p>
       <p>+${result}{priceText}</p>
       </div>
        <Button/>
    </div>
  )
}

export default Summary