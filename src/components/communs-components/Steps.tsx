

type Stepformate = {stepLink:number}

const Steps = ({stepLink}:Stepformate) => {

    const active = 'rounded-[50px] bg-Blue-200 text-Blue-950 font-bold item-center text-center py-1.5 mx-2.5 nt:my-4   h-[35px] w-[35px]  '
    const normal = 'rounded-[50px] bg-transparent outline-1 outline-white text-white py-1.5  mx-2.5  nt:my-4  text-center font-bold items-center h-[35px] w-[35px] '

  const list = [
    {
      num: 1,
      title: 'STEP 1',
      subTitle: 'YOUR INFO'
    },
     {
      num: 2,
      title: 'STEP 2',
      subTitle: 'SELECT PLAN'
    },
     {
      num: 3,
      title: 'STEP 3',
      subTitle: 'ADD-ONS'
    },
     {
      num: 4,
      title: 'STEP 4',
      subTitle: 'SUMMARY'
    }
  ]

  return (
    <div id='stepBanner' className="absolute top-0 nt:relative">
        <ul className="flex full-w h-[50px]  relative top-[50px] mx-[-1em]
         nt:flex-col justify-start nt:absolute nt:left-[2.5em] nt:h-[500px]">
             {
              list.map((item, index) => (
                <div className="nt:flex nt:flex-row  nt:items-center nt:w-[180px] nt:my-2">
                  <li key={index} className={stepLink === item.num ? active : normal } >{item.num}</li>
                  <div className="ml-2">
                      <h2 className='hidden nt:block font-bold text-Blue-300'>{item.title}</h2>
                      <p className='hidden nt:block font-bold text-Blue-50'>{item.subTitle}</p>
                  </div>
                </div>
              ))
             }
        </ul>
    </div>
  )
}

export default Steps