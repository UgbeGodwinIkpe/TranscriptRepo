import { Button, TextField } from '@mui/material'
import React from 'react'

function Forgotpassword() {
  return (
    <div className='grid grid-cols-1 flex-1 justify-items-center items-center justify-center'>       
        <div className="flex flex-col md:w-4/12 w-full gap-y-[25px] my-[25px]">
            <h4 className='text-center font-bold'>Forgot Password</h4>
            <TextField
                id="outlined-email-input"
                label="email address"
                type="email"
            />
            <Button
                variant='contained'
                className='bg-[#6B3FA0] lowercase hover:bg-[#6B3FA0]'
            >
                Recovery Link
            </Button>
        </div>
       
    </div>
  )
}

export default Forgotpassword