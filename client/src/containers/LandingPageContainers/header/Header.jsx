// mui imports
import { Button } from '@mui/material'

// react imports
import React from 'react'

// rrd imports
import { Link } from 'react-router-dom'

// assets imports
import headerImg from '../../../assets/headerimg.png'

function Header() {
  return (
    <div className='flex-1 grid md:grid-cols-2 grid-cols-1 gap-y-4 md:gap-y-0'>
        <div className='flex flex-col bg-white justify-center gap-y-4'>
            <h1 className='md:text-[60px] text-[30px] font-bold leading-none'>Your Transcripts, Simplified Access, Request, Delivered</h1>
            <p className='md:text-[16px] text-[12px]  font-light'>Accelerate rour educational journey with our simplified transcript retrieval platform. Gain easy access to your transcripts, effortlessly request official records, and pave the way to your success.</p>
            <Link to={'/selectlogin'}>
                <Button
                  variant='contained'
                  className='bg-[#6B3FA0]'  
                >
                    Get started
                </Button>
            </Link>
        </div>

        <div className='flex'>
            <img src={headerImg} alt="headerimg" />
        </div>
    </div>
  )
}

export default Header