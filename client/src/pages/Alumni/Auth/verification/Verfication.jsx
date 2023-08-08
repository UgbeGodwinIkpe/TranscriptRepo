// react imports
import React, {useState, useRef, useEffect} from 'react'

// react-redux imports
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { verify, reset } from '../../../../features/auth/authSlice';
import { Spinner } from '../../../../components';

function Verfication() {

    const numFields = 5; // You can adjust this value based on your requirement
    const [values, setValues] = useState(Array(numFields).fill(""));
    const inputRefs = useRef([]);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user.alumni.isVerified) {
            console.log(user)
            navigate(`/alumni/${user.alumni._id}/dashboard`)
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, dispatch])
  
    useEffect(() => {
      inputRefs.current[0].focus(); // Set focus on the first input field when the component mounts
    }, []);
  
    // Function to handle input change and auto-focus to the next field
    const handleInputChange = (index, value) => {
      if (!isNaN(value) && value !== "") {
        const newValues = [...values];
        newValues[index] = value;
  
        setValues(newValues);
  
        if (index < numFields - 1) {
          inputRefs.current[index + 1].focus();
        }else{
            // verifcation api will be called here
            const verificationCode = newValues.join('')

            const userData = {
                verificationCode,
                id: user.alumni._id
            }

            dispatch(verify(userData))
        }
        
      }
    };
  
    // Function to handle pasting values and auto-focus to the next field
    const handlePaste = (event, index) => {
      event.preventDefault();
      const pastedText = event.clipboardData.getData("text/plain");
      const numbersOnly = pastedText.replace(/[^0-9]/g, "");
      const newValue = numbersOnly.charAt(0) || "";
  
      handleInputChange(index, newValue);
    };
  
    // Function to handle backspace and delete field
    const handleBackspace = (index, event) => {
        if (event.key === "Backspace") {
        const newValues = [...values];
        newValues[index] = "";

        setValues(newValues);

        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
        }
    };

  return (
    <div className='flex flex-col md:w-1/2 m-auto flex-1 items-center gap-y-[50px] p-5'>
        <h4 className='font-bold'>Enter Verification token</h4>
        <form className='grid grid-cols-5 md:gap-x-5 gap-x-2'>
            {Array.from({ length: numFields }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className='border border-slate-300 text-center py-2'
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={values[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onPaste={(e) => handlePaste(e, index)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                />
            ))}
        </form>

        {isLoading ? <Spinner/> : ``}

        <div className='flex flex-col'>
            <p className='text-center'>Please Insert the 5 digit token sent to your email</p>
            <p className='text-[#6B3FA0] text-center'>{user.alumni.emailAddress}</p>
        </div>

    </div>
  )
}

export default Verfication