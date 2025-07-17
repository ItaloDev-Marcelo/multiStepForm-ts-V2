
// import { useState, useEffect } from 'react'
import { useSelectSummary } from '../store/useSelectSumarry'
import { useAddOnsSummary } from '../store/useAddOnsSummary'

const Summary = () => {

  const {addOnsData} = useAddOnsSummary()
  const {selected} = useSelectSummary()

  const mixed = [...addOnsData,...selected]

  const Remo = mixed.map((item) => {
     const dt = item.price
     return dt
  })


  const result = Remo.reduce((acc,num) => {
    return acc + num
  },0)

  console.log(result)


  return (
    <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        {
          selected.map((item) => (
             <div  key={Math.random()}>
                <p>{item.name} (monthly)  <br/> <a href='#'>Change</a> </p>
                <p>${item.price}/mo </p>
             </div>
          ))
        }

        {
         addOnsData.length > 0 &&  addOnsData.map((item) => (
             <div key={Math.random()} className='flex justify-between p-2'>
                <p>{item.name}</p>
                <p>${item.price}</p>
             </div>
          ))
        }

       
        
    </div>
  )
}

export default Summary