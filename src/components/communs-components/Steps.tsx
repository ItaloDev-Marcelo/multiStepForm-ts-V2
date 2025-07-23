type Stepformate = {stepLink:number}
import {active, normal,list }  from './data/stepData';

const Steps = ({stepLink}:Stepformate) => {

  return (
    <div id='stepBanner' className='absolute top-0 nt:relative'>
        <ul className='flex full-w h-[50px]  relative top-[50px] mx-[-1em]
         nt:flex-col justify-start nt:absolute xl:top-[95px] nt:top-[23px] nt:left-[2.5em] nt:h-[70px]'>
             {
              list.map((item, index) => (
                <div  key={index}  className='nt:flex nt:flex-row  nt:items-center nt:w-[180px] nt:my-0'>
                  <li className={stepLink === item.num ? active : normal } >{item.num}</li>
                  <div className='ml-2'>
                      <h2 className='hidden nt:block font-bold text-[.9em] text-Blue-300'>{item.title}</h2>
                      <p className='hidden nt:block font-bold text-[.9em] text-Blue-50'>{item.subTitle}</p>
                  </div>
                </div>
              ))
             }
        </ul>
    </div>
  )
}

export default Steps