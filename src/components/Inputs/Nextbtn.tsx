import { useNavigate } from 'react-router';
type UrlForm = {Url : string}
const Nextbtn = ({Url}:UrlForm ) => {

  const navigate = useNavigate()

  return (
    <button className='btn mt-3 bg-Blue-950 text-White font-bold hover:bg-Purple-600' onClick={() => navigate(Url) }>
       Next Step
    </button>
  )
}

export default Nextbtn