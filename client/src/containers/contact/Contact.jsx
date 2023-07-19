import React from 'react'

// asset imports
import contactImg from '../../assets/contact.png'

// mui imports
import { Divider, TextField } from '@mui/material'

function Contact() {
  return (
    <div className='flex-1  flex flex-col -mx-5'>
        <div className='flex flex-col items-center justify-items-center justify-center'>
            <div className='md:w-[1064px] h-[478px] md:p-5 p-3 bg-[#6B3FA0] bg-opacity-10 w-full grid grid-cols-1 md:grid-cols-2 my-12 items-center rounded-md'>
                <div className='flex flex-col gap-y-[16px]'>
                    <div className='flex flex-col gap-y-[8px]'>
                        <h5 className='text-[24px] md: text-[12px]'>Talk to us</h5>
                        <p className='md:text-[16px] text-[8px] font-light'>let us know how we can help you</p>
                    </div>
                    <div className='flex flex-col gap-y-[10px] w-9/12'>
                        <TextField
                            id="outlined-text-input"
                            label="enter name"
                            type="text"
                        />

                        <TextField
                            id="outlined-email-input"
                            label="enter email"
                            type="email"
                        />

                        <TextField
                            id="outlined-text-input"
                            label="enter messge"
                            type="text"
                            multiline
                            rows={4}
                        />
                    </div>
                </div>
                <div className='flex  h-[356px]'>
                    <img src={contactImg} alt="contactImg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact