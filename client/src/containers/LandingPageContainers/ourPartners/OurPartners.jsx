// mui imports
import { Button } from '@mui/material'

// react imports
import React from 'react'
import { Link } from 'react-router-dom'

function OurPartners() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col gap-y-[16px] items-center'>
            <h4 className='font-bold md:text-[40px] text-[20px]'>Our Partners</h4>
            <p className='font-light'>We work hand-in-hand with educational institutions and other organizations to ensure seamless transcript retrieval services. Together we strive to enhance accessibility, accuracy, and efficiency in delivering official transcripts to support your educational and profesional aspirations. </p>
            <Link>
                <Button
                    variant='contained'
                    className='bg-[#6B3FA0] lowercase'
                >
                    see all
                </Button>
            </Link>
        </div>

        <div className='grid grid-cols-1'>

        </div>
    </div>
  )
}

export default OurPartners