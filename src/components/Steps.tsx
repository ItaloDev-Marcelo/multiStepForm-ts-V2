
type Stepformate = {stepLink:number}

const Steps = ({stepLink}:Stepformate) => {

    const active = 'rounded-[50px] bg-Blue-200 text-white font-bold'
    const normal = 'rounded-[50px] bg-transparent outline-1 outline-white text-white font-bold'

  const list = [1,2,3,4]
  return (
    <div id='stepBanner'>
        <ul>
             {
              list.map((item, index) => (<li key={index} className={stepLink === item ? active : normal } >{item}</li>))
             }
        </ul>
    </div>
  )
}

export default Steps