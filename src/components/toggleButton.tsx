import { useSelectedPlan } from "../store/useTogglePrice"


const ToggleBtn = () => {

  const {togglePlan, isSelected} = useSelectedPlan();
   console.log(isSelected)

  return <div className='flex justify-center py-3 bg-[#d6e4ff] rounded-[5px]'>
     <div><p><span className="font-bold">Monthly</span></p></div>
    <div className="mx-5">
       <input type="checkbox"
        defaultChecked
        className="toggle custom-toggle border-Blue-950 bg-Blue-950 checked:border-Blue-950
         checked:bg-Blue-950 checked:text-Blue-950"
       onChange={togglePlan} />
    </div>
     
     <div><p><span  className="font-bold">Yearly</span></p></div>
  </div>
}

export default ToggleBtn