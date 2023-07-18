// react imports
import React from 'react'

// mui imports
import { Button, Divider, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className='flex flex-col md:w-4/12 w-full gap-y-4 p-3 md:p-0'>

      <div className='flex flex-col gap-y-4'>
        <TextField
          id="outlined-email-input"
          label="email address"
          type="email address"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>

      <div className='text-right text-xs font-light'>
        <Link>forgot password ?</Link>
      </div>

      <Button 
        variant="contained"
        className='bg-[#6B3FA0] hover:bg-[#6B3FA0] lowercase'
      >
        Sign in
      </Button>

      <Button 
        variant="contained"
        className='bg-[#CCCCCC] text-slate-900 hover:bg-[#CCCCCC] lowercase'
      >
        create account
      </Button>

      <Divider>or continue with</Divider>

      <Button 
        variant="contained" 
        endIcon={''}
        className='bg-[#CCCCCC] text-slate-900 lowercase hover:bg-[#CCCCCC]'
      >
        continue with google
      </Button>

      <p className='text-xs text-center'>by clicking the sign up button you agree to our terms and policies.</p>
    </div>
  )
}

export default LoginForm