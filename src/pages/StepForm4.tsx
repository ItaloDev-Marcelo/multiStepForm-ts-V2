import { useState } from 'react';
import { useNavigate } from 'react-router';
import Steps from '../components/communs-components/Steps';
import Main from '../components/communs-components/Main';
import CardWrapper from '../components/communs-components/CardWrapper';
import UseStep4Data from './utils/step4Data';
import Backbtn from '../components/Inputs/BackBtn';
import Thanks from './Thanks';

const Summary = () => {
  const  {result,priceText,plan,selected,addOnsData,isSelected} = UseStep4Data()
  const  [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  return (
   <Main>
    <Steps stepLink={4}/>
     {
      !isActive ?  <>
      <CardWrapper>
          <div className='flex flex-col'>
        <h2 className='card-title text-[1.5em] text-Blue-950 font-bold mb-3'>Finishing up</h2>
        <p className='text-[.9em] font-medium text-gray-500'>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='flex flex-col  bg-Blue-200 rounded-[5px] p-2 my-3'>
        {
        selected.length > 0 &&  selected.map((item) => (
             <div  key={Math.random()} className='flex flex-row justify-between items-center p-3 '>
               <div> <p > <span className='text-[1em] font-bold text-Blue-950 '>{item.name}</span>
                <span className='text-[1em] font-bold text-Blue-950 '>({plan}) </span>  <br/>
                 <a href='#' className='underline' onClick={() => navigate('/step-02')} >Change</a> </p></div>
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
       <div className='mt-5 move-left flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 left-0 p-3'>
          <Backbtn Url='/step-02/step-03' />
          <button onClick={() => setIsActive(true)} className='btn mt-3 bg-Blue-950 text-White font-bold hover:bg-Purple-600'>Next Step</button>
          
       </div>
      </CardWrapper>
    </> :
    <Thanks/>
     }
   </Main>
  )
}

export default Summary