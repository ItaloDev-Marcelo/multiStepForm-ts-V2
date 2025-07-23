import { useSelectedPlan } from '../../store/useTogglePrice';
import { useSelectSummary } from '../../store/hooks/plans/useSelectSumarry'
import { useAddOnsSummary } from '../../store/hooks/plans/useAddOnsSummary'


const UseStep4Data = () => {

  const {addOnsData} = useAddOnsSummary()
  const {selected} = useSelectSummary()
  const  {isSelected} = useSelectedPlan()
  const mixed = [...addOnsData,...selected]
  
    const Remo = mixed.map((item) => {
       const dt = item.price
       return dt
    })
  
  
    const result = Remo.reduce((acc,num) => {
      return acc + num
    },0)
  
  
    const priceText = isSelected ?  '/mo' : '/yr';
    const plan = isSelected ?  'Monthly' : 'Yearly';

  return {
    result,
    priceText,
    plan,
    selected,
    addOnsData,
    isSelected
  }
}

export default UseStep4Data