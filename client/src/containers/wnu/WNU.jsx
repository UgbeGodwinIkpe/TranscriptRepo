// react imports
import React from 'react'

// assets imports
import wnuImg from '../../assets/wnuimg.png' 

// rrd imports
import { Link } from 'react-router-dom'

// mui imports
import { Button } from '@mui/material'

function WNU() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex'>
            <img src={wnuImg} alt="wnuimg" />
        </div>

        <div className='flex flex-col gap-y-[50px]'>
            <h4 className='font-bold md:text-[40px] text-right'>Why need us</h4>
            <p className='font-light md:text-[16px]'>At Transcriptdigita we understand the challenges and frustrations that can arise when it comes to obtaining your transcripts, That's why we are here to simplify the process and provide you with a seamless solution. Here's why our customers need us</p>
            <div className='flex flex-col gap-y-[16px] md:w-8/12 self-end'>
                <span className='flex items-center p-2 rounded-full bg-[#F2DF32]'>
                    <p className='text-[18px]'>Time-saving Convinience</p> 
                </span>

                <span className='flex items-center p-2 rounded-full bg-[#FFB6B6]'>
                    <p>Streamlined Efficiency Guaranteed</p> 
                </span>

                <span className='flex items-center p-2 rounded-full bg-[#83DCC7]'>
                    <p>Reliable network</p> 
                </span>

                <span className='flex items-center p-2 rounded-full bg-[#CACACA]'>
                    <p>Expert Support and Feedback system</p> 
                </span>
            </div>

            <Link className='self-end'>
                <Button
                  variant='contained'
                  className='bg-[#6B3FA0] lowercase'  
                >
                    Explore our services
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default WNU