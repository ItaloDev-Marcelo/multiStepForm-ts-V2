
import CardWrapper from '../components/communs-components/CardWrapper'
import Thankyou from '../assets/images/icon-thank-you.svg';
const Thanks = () => {
  return (
    <CardWrapper>
        <div className='flex-col justify-center items-center text-center py-5'>
            <div className='flex flex-col justify-center items-center text-center'>
                <img src={Thankyou} alt='' className='py-4.5'/>
            <h1 className='card-title text-[1.5em] text-Blue-950 font-bold mb-3 text-center my-2'>Thank you!</h1>
            </div>
        <p className='text-[.9em] font-medium text-gray-500'>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
        </div>
    </CardWrapper>
  )
}

export default Thanks