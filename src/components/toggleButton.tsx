import { useSelectedPlan } from "../store/useTogglePrice"


const ToggleBtn = () => {

  const {togglePlan, isSelected} = useSelectedPlan();
   console.log(isSelected)

  return <div>
     <p><span>Monthly</span></p>
     <input type="checkbox" id="" onChange={togglePlan} />
     <p><span>Yearly</span></p>
  </div>
}

export default ToggleBtn