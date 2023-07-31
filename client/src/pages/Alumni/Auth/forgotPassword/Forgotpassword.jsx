// mui imports
import { Button, TextField } from '@mui/material'

// react imports
import React, { useState, useEffect } from 'react'

// toast imports
import { toast } from 'react-toastify'

// react-redux imports
import { useDispatch, useSelector } from 'react-redux'

// features imports
import { resetPassword, reset } from "../../../../features/auth/authSlice";

// components imports
import { Spinner } from '../../../../components';

function Forgotpassword() {

    const dispatch = useDispatch()
    const [emailAddress, setEmailAddress] = useState('')

    const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
    
        if(isSuccess) {
            toast.success(message)
        }
    
        dispatch(reset())
    
      }, [isError, isSuccess, message, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            emailAddress
        }

        dispatch(resetPassword(userData))
    }

  return (
    <div className='grid grid-cols-1 flex-1 justify-items-center items-center justify-center'>       
        <form onSubmit={handleSubmit} className="flex flex-col md:w-4/12 w-full gap-y-[25px] my-[25px]">
            <h4 className='text-center font-bold'>Forgot Password</h4>
            <TextField
                id="outlined-email-input"
                label="email address"
                type="email"
                value={emailAddress}
                onChange={(e)=>{ setEmailAddress(e.target.value) }}
                required
            />
            <Button
                variant='contained'
                className='bg-[#6B3FA0] lowercase hover:bg-[#6B3FA0]'
                type='submit'
            >
                Recovery Link
            </Button>

            {isLoading ? <Spinner/> : ``}
        </form>
    </div>
  )
}

export default Forgotpassword