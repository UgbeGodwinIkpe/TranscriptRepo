import {FaSpinner} from 'react-icons/fa6'

function Spinner() {
  return (
    <div className='flex justify-center'>
        <span className='m-auto rounded-full shadow'>
            <FaSpinner className='animate-spin' color='purple'/>
        </span>
    </div>
  )
}

export default Spinner