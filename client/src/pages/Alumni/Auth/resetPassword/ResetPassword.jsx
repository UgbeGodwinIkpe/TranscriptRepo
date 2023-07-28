// mui imports
import { Button, TextField } from '@mui/material'

// react imports
import React, { useState } from 'react'

function ResetPassword() {

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

  return (
    <div className='grid grid-cols-1 flex-1 justify-items-center items-center justify-center'>       
        <form className="flex flex-col md:w-4/12 w-full gap-y-[25px] my-[25px]">
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
                id="outlined-email-input"
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