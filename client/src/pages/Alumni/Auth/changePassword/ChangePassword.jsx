import { Button, TextField } from '@mui/material'
import React from 'react'

function ChangePassword() {
  return (
    <div className='grid grid-cols-1 flex-1 bg-white justify-items-center items-center justify-center rounded-md'>       
        <div className="flex flex-col md:w-4/12 w-full gap-y-[25px] my-[25px]">
            <h4 className='text-center font-bold'>New password</h4>
            <TextField
                id="outlined-email-input"
                label="new password"
                type="password"
            />

            <TextField
                id="outlined-email-input"
                label="confirm password"
                type="password"
            />
            <Button
                variant='contained'
                className='bg-[#6B3FA0] lowercase hover:bg-[#6B3FA0]'
            >
                save
            </Button>
        </div>
    
    </div>
  )
}

export default ChangePassword