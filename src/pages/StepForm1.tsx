import { type FormDataOfStep1} from '../lib/schemas/zodSchemaForStep1';
import Input from '../components/Inputs/Input';
import Button from '../components/communs-components/Button'
import Steps from '../components/communs-components/Steps';
import Main from '../components/communs-components/Main';
import CardWrapper from '../components/communs-components/CardWrapper';
import { useNavigate } from 'react-router';
import { useStep } from './hooks/useStep1';

const StepForm1 = () => {


const {register, handleSubmit, errors, setForm} = useStep()
const navigate = useNavigate()
const submitData = (data:FormDataOfStep1) => {
    setForm(data)
    if(data) navigate('step-02')
    
  }

  return (
   <Main>
     <Steps stepLink={1} />
    <CardWrapper>
        <div className='flex flex-col '>
           <h1 className='card-title text-[1.5em] text-Blue-950 font-bold mb-3'>Personal info</h1>
           <p className='text-[.9em] font-medium text-gray-500'>Please provide your name, email <br className='nt:hidden' /> address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit(submitData)}  >
       <Input register={register} placeholder='e.g. Stephen King' errors={errors}
        type='text' label='Name' name={ 'userName'} />
       <Input register={register} placeholder='e.g. stephenking@lorem.com' errors={errors} type='email' label='Email Address ' name='email'  />
       <Input register={register} placeholder='e.g. +1 234 567 890' errors={errors} type='text' label='Phone Number' name='phoneNumber'  />
       <div className='mt-5 move-left flex justify-between fixed nt:relative w-full bg-white nt:bg-transparent bottom-0 
       left-0 p-3'>
        <Button />
          </div>
       </form>
    </CardWrapper>
   </Main>
  )
}

export default StepForm1