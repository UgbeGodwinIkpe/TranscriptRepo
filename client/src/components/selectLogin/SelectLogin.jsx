import { Button } from '@mui/material'
import React from 'react'

import university from '../../assets/university.png'
import alumni from '../../assets/alumni.png'
import { Link } from 'react-router-dom'

function SelectLogin() {
  return (
    <div className='flex flex-1 justify-center items-center justify-items-center'>
        <div className="p-5 rounded-lg md:w-8/12 w-full gap-y-8 flex flex-col">
            <div className='flex '>

            </div>

            <h4 className='text-center'>Continue as</h4>

            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-x-16'>
                <div className="flex flex-col items-center">
                    <img src={university} alt="unipic" />
                    <h4>university</h4>
                    <Link to={``}>
                        <Button
                            variant='contained'
                            className='bg-[#6B3FA0] mt-8'
                        >
                            continue
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <img src={alumni} alt="alumnipic" />
                    <h4>Alumni</h4>
                    <Link to={`/alumni/login`}> 
                        <Button
                            variant='contained'
                            className='border border-[#6B3FA0] bg-white text-[#6B3FA0] mt-8'
                        >
                            continue
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectLogin