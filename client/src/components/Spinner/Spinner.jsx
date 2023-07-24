import {FaSpinner} from 'react-icons/fa6'

function Spinner() {
  return (
    <div className='flex justify-center rounded-full shadow'>
        <FaSpinner className='animate-spin' color='orange'/>
    </div>
  )
}

export default Spinner