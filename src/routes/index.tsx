
import { Route, Routes } from 'react-router'
import StepForm1 from '../pages/StepForm1'
import StepForm2 from '../pages/StepForm2'
import StepForm3 from '../pages/StepForm3'
import Summary from '../pages/StepForm4'

const RouteLayout = () => {

  return (
    <Routes>
         <Route  path='/' index element={<StepForm1/>}   />
         <Route path='/step-02' element={<StepForm2/>}  />
         <Route path='/step-02/step-03' element={<StepForm3/>} />
         <Route path='/step-02/step-03/step-04' element={<Summary/>}  />
    </Routes>
  )
}

export default RouteLayout