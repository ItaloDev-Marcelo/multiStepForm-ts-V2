import Button from '../components/communs-components/Button'
import Backbtn from '../components/Inputs/BackBtn';
import Steps from '../components/communs-components/Steps';
import Main from "../components/communs-components/Main";
import CardWrapper from "../components/communs-components/CardWrapper";
import UseStep4Data from './hooks/step4Data';
const Summary = () => {

  const  {result,priceText,plan,selected,addOnsData,isSelected} =UseStep4Data()

  return (
   <Main>
    <Steps stepLink={4}/>
      <CardWrapper>
          <div className='flex flex-col'>
        <h2 className='card-title text-[1.7em] text-Blue-950 font-bold mb-3'>Finishing up</h2>
        <p className='text-[1.1em]'>Double-check everything looks OK before confirming.</p>
      </div>
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
       <div className='mt-5 flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 left-0 p-3'>
            <Button/>
          <Backbtn Url='/step-02/step-03' />
       </div>
      </CardWrapper>
   </Main>
  )
}

export default Summary