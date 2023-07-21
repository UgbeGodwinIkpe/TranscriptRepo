import React, {useState} from 'react'

// rrd imports
import { Link } from 'react-router-dom'

// material-ui  imports
import { Button } from '@mui/material';

// icons imports
import { HiChevronDown } from 'react-icons/hi2'

function Navbar() {

  return (
    <div className='shadow p-3 md:p-5 flex justify-between items-center'>
        <div>
            <Link to={`/`} className='font-bold'>TranscriptDigita</Link>
        </div>
        <div className='justify-evenly flex-1 hidden md:flex'>
            <Link to={`/`} className='flex'>
                <p>Home</p>
            </Link>

            <div className='flex'>
                <Link>About</Link>
            </div>

            <div className='flex items-center gap-x-2'>
                <Link>Services</Link>
                <HiChevronDown/>
            </div>

            <div className='flex items-center gap-x-2'>
                <Link>Contact</Link>
                <HiChevronDown/>
            </div>
        </div>

        <div>
            <Link to={`/selectlogin`}>
                <Button 
                    variant="contained"
                    className='bg-[#6B3FA0] hover:bg-[#6B3FA0]'
                >
                Sign in
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar