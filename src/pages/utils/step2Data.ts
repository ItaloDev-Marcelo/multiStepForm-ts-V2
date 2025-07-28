import { useSelectedPlan } from '../../store/useTogglePrice';



const UseStep2Data = () => {

 const {isSelected} = useSelectedPlan();

 const option01:string = isSelected ? '$9' : '$90' ;
 const option02:string  = isSelected ? '$12' : '$120' ;
 const option03:string  = isSelected ? '$15' : '$150' ;
 const radioOptionValue1:string  = isSelected ? 'Arcane 9' : 'Arcene 90';
 const radioOptionValue2:string  = isSelected ? 'Advanced 12' : 'Advanced 120';
 const radioOptionValue3:string  = isSelected ? 'Pro 15' : 'Pro 150';
 
  return {
    option01,
    option02,
    option03,
    radioOptionValue1,
    radioOptionValue2,
    radioOptionValue3
  }
}

export default UseStep2Data