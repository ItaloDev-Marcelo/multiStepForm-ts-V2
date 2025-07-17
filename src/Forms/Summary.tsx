
// import { useState, useEffect } from 'react'
import { useSelectSummary } from '../store/useSelectSumarry'
import { useSummary } from '../store/useSummary'

const Summary = () => {

  const {addOnsData} = useSummary()
  const {selected} = useSelectSummary()


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
                <p>{item.text}</p>
                <p>${item.num}</p>
             </div>
          ))
        }

        
    </div>
  )
}

export default Summary