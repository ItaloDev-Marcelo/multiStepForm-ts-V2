import { useNavigate } from 'react-router';
type UrlForm = {Url : string}

const Backbtn = ({Url}:UrlForm ) => {
  const navigate = useNavigate()

  return (
    <button className='btn mt-3 btn-ghost text-Blue-950 font-semibold' onClick={() => navigate(Url) }>
       Go Back
    </button>
  )
}

export default Backbtn