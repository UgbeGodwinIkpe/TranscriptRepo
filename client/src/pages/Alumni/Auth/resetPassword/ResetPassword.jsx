import axios from 'axios'
// mui imports
import { Button, TextField } from '@mui/material'

// react imports
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

// components imports
import { Spinner } from '../../../../components'

// react-redux imports
import { useSelector, useDispatch } from 'react-redux'

// features imports
import { changePassword, reset } from "../../../../features/auth/authSlice";

// rrd imports
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        password: '',
        confirmedPassword: ''
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
    
        if(isSuccess || user) {
            navigate(`/alumni/${user.alumni._id}/dashboard`)
        }
    
        dispatch(reset())
    
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const {password, confirmedPassword} = formData
        
        const userData = {
            password,
            token: axios.params
        }

        if(password !== confirmedPassword) {
            alert('password does not match')
        }

        if(password == confirmedPassword){
            console.log(password, confirmedPassword)

            dispatch(changePassword(userData))
        }
        
    }

  return (
    <div className='grid grid-cols-1 flex-1 justify-items-center items-center justify-center'>       
        <form onSubmit={handleSubmit} className="flex flex-col md:w-4/12 w-full gap-y-[25px] my-[25px]">
            <h4 className='text-center font-bold'>Password reset</h4>
            <TextField
                id="outlined-email-input"
                label="new password"
                type="password"
                name='password'
                required
                value={formData.password}
                onChange={inputChange}
            />

            <TextField
                id="outlined-email-input2"
                label="confirm password"
                type="password"
                name='confirmedPassword'
                required
                value={formData.confirmedPassword}
                onChange={inputChange}
            />
            <Button
                variant='contained'
                className='bg-[#6B3FA0] lowercase hover:bg-[#6B3FA0]'
                type='submit'
            >
                save
            </Button>
        </form>
    
    </div>

  )
}

export default ResetPassword