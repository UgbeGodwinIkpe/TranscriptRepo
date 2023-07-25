// react imports
import React, { useState, useEffect } from 'react'

// components imports
import { Spinner } from '../../../../components'

import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

// features imports
import { login, reset } from "../../../../features/auth/authSlice";

// mui imports
import { Button, Divider, TextField } from '@mui/material';

import {FaGoogle} from 'react-icons/fa6'


function Login() {

  const [formData, setFormData] = useState({
      emailAddress: '',
      password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)


  useEffect(()=>{
    if(isError){
        toast.error(message)
    }

    if(isSuccess || user) {
        navigate(`/alumni/${user.alumni._id}/dashboard`)
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const inputChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    const {emailAddress, password} = formData

    const userData = {
        emailAddress,
        password
    }

    dispatch(login(userData))  
  }

  if(isLoading){
    return (<Spinner/>)
  }

  if(isError) {
      toast.error(message)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col md:w-4/12 w-full gap-y-4 p-3 md:p-0'>
          <div className='flex flex-col gap-y-4'>
            <TextField
              id="outlined-email-input"
              label="email address"
              type="email"
              name='emailAddress'
              value={formData.emailAddress}
              onChange={inputChange}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name='password'
              value={formData.password}
              onChange={inputChange}
            />
          </div>

          <div className='text-right text-xs font-light'>
            <Link>forgot password ?</Link>
          </div>

          <Button 
            variant="contained"
            className='bg-[#6B3FA0] hover:bg-[#6B3FA0] lowercase'
            type='submit'
          >
            Sign in
          </Button>


            <Button 
              variant="contained"
              className='bg-[#CCCCCC] text-slate-900 hover:bg-[#CCCCCC] lowercase'
            >
              <Link to={`/alumni/signup`}>
                create account
              </Link>
            </Button>

          <Divider>or continue with</Divider>

          <Button 
            variant="contained" 
            endIcon={<FaGoogle/>}
            className='bg-[#CCCCCC] text-slate-900 lowercase hover:bg-[#CCCCCC]'
          >
            continue with google
          </Button>

          <p className='text-xs text-center'>by clicking the sign up button you agree to our terms and policies.</p>
        </form>
    </div>
  )
}

export default Login ;