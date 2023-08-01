// mui imports
import { Button, MenuItem, TextField } from '@mui/material'

// react imports
import React, { useState } from 'react'

function AlumniDetailsForm() {

    const [activeForm, setActiveForm] = useState(1)

    const currencies = [
        {
          value: 'full time',
          label: 'f',
        },
        {
          value: 'part time',
          label: 'p',
        },
        {
          value: 'remedials',
          label: 'r',
        }
      ];

  return (
    <div className='p-5 bg-white overflow-y-scroll h-full my-auto'>
        <div className='flex flex-col gap-y-4'>
            <h4 className='font-bold text-center'>Fill the Form below</h4>
            <p className='text-[14px] font-light'>When applying for your transcript please ensure that you ;</p>
            <ul className='p-2 text-[12px] rounded-lg bg-green-100 text-green-400 gap-y-1'>
                <li>* carefully and accurately fill out theform below.</li>
                <li>* Double-check all the informations you provide, including your name, studentID number, course details, and the address where you want the transcript to be sent.</li>
                <li>* Any errors or discrepancies may lead to delays in processing your request</li>
            </ul>

            <form className='md:w-8/12 border'>
                {activeForm == 1 && 
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[50px] gap-y-[25px] p-5">
                        <h4 className='col-span-2'>Alumni Details</h4>
                        <TextField
                            label="Full Name"
                            id="outlined-size-small"
                            size="small"
                        />

                        <TextField
                            id="filled-select-currency"
                            select
                            label="Program type"
                            helperText="Please select your programme type"
                            variant="filled"
                            size='small'
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                        </TextField>
                        
                        <TextField
                            label="matric/ Reg Number"
                            id="outlined-size-small2"
                            size="small"
                        />

                        <TextField
                            label="faculty"
                            id="outlined-size-small3"
                            size="small"
                        />

                        <TextField
                            label="Department"
                            id="outlined-size-small4"
                            size="small"
                        />

                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Year of graduation"
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your grduation year"
                        >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                    </div>
                }
               
                {activeForm == 2 && 
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[50px] gap-y-[25px] p-5">
                        <h4 className='col-span-2'>Delivery Method</h4>
                        <TextField
                            label="Mode of delivery"
                            size="small"
                            select
                        />

                        <TextField
                            label="Recipient email"
                            size="small"
                            type='email'
                        />

                        <TextField
                            label="Recipient address"
                            size="small"
                            type='text'
                        />

                        <TextField
                            label="Phone Number"
                            size="small"
                            type='number'
                        />

                        <TextField
                            size="small"
                            type='file'
                        />
                    </div>
                }        
                
            </form>

            {activeForm == 1 ? 
                (<Button
                    variant='contained'
                    className='lowercase md:w-4/12 mx-auto bg-blue-500'
                    onClick={()=>{setActiveForm(2)}}
                >
                    Continue
                </Button>)
            :

                (
                <div className="grid grid-cols-2 md:w-8/12">
                    <Button
                        variant='contained'
                        className='lowercase md:w-4/12 mx-auto bg-blue-500'
                        onClick={()=>{setActiveForm(1)}}
                    >
                        Previous
                    </Button>

                    <Button
                        variant='contained'
                        className='lowercase md:w-4/12 mx-auto bg-blue-500'
                        onClick={()=>{setActiveForm(1)}}
                    >
                        Complete
                    </Button>
                </div>
                )
            }    
            
        </div>
    </div>
  )
}

export default AlumniDetailsForm