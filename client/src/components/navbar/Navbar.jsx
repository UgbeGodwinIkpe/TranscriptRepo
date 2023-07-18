import React, {useState} from 'react'

// rrd imports
import { Link } from 'react-router-dom'

// material-ui  imports
import { Button } from '@mui/material';

// materian icon imports
import KeyboardArrowDownIcon from '@mui/icons-material/keyboardArrowDown';

function Navbar() {

  return (
    <div className='shadow p-3 md:p-5 flex justify-between items-center'>
        <div>
            <h3 className='font-bold'>TranscriptDigita</h3>
        </div>
        <div className='flex justify-evenly flex-1'>
            <div className='flex'>
                <Link>Home</Link>
            </div>

            <div className='flex'>
                <Link>About</Link>
            </div>

            <div className='flex items-center'>
                <Link>Services</Link>
                <KeyboardArrowDownIcon width={20} />
            </div>

            <div className='flex'>
                <Link>Contact</Link>
                <KeyboardArrowDownIcon width={20} />
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