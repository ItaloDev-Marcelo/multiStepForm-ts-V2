import { useSelectedPlan } from "../store/useTogglePrice"


const ToggleBtn = () => {

  const {togglePlan, isSelected} = useSelectedPlan();
   console.log(isSelected)

  return <div className='flex'>
     <p><span>Monthly</span></p>
    <div>
       <input type="checkbox" 
       className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400
        bg-amber-300 [--tglbg:var(--color-sky-500)]
        checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
       onChange={togglePlan} />
    </div>
     
     <p><span>Yearly</span></p>
  </div>
}

export default ToggleBtn