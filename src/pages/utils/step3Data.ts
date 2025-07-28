import { useSelectedPlan } from '../../store/useTogglePrice';

const UseStep3Data = () => {

    const {isSelected} = useSelectedPlan();

    const online:string = 'Online service'
    const onlineText:string = 'Access to multiplayer games'
    const onlinePrice:string = isSelected ? '+$1/mo' : '+$10/yr'
    const onlineR:string = isSelected ? 'Online-service 1' : 'Online-service 10';
    const larger:string = 'Larger storage'
    const largerText:string = 'Extra 1Tb of cloud save'
    const largePrice:string = isSelected ? '+$2/mo' : '+$20/yr'
    const largeR:string = isSelected ? 'Larger-storage 2' : 'Larger-storage 20'
    const customizable:string = 'Customizable profile'
    const customizableText:string = 'Custom theme on your profile'
    const customizablePrice:string = isSelected ? '+$2/mo' : '+$20/yr'
    const customizableR:string = isSelected ? 'Customizable-profile 2' : 'Customizable-profile 20'
 
  return {
    online,
    onlineText,
    onlinePrice,
    onlineR,
    larger,
    largerText,
    largePrice,
    largeR,
    customizable,
    customizableText,
    customizablePrice,
    customizableR
  }
}

export default UseStep3Data