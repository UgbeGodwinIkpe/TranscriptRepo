import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {logout, reset} from '../../features/auth/authSlice'

// rrd imports
import { Link } from 'react-router-dom'

// material-ui  imports
import { Button } from '@mui/material';

// icons imports
import { HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2'
import MobileMenu from '../mobileMenu/MobileMenu';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const {user} = useSelector((state) => state.auth)

  return (
   <div className="grid grid-cols-1 shadow">
        <div className='p-3 md:p-5 flex justify-between items-center'>
            {user && user.alumni.isVerified == true
            
            ? (
                <>
                    <div className='hidden md:flex md:items-center justify-between gap-x-4 w-full'>
                        <span className='flex gap-x-2'>Welcome <h4 className='text-[#6B3FA0] font-semibold'>{user.alumni.fullName}</h4></span>
                        <div className="flex gap-x-4">
                            <Link to={`/alumni/${user.alumni._id}/dashboard`} className='bg-[#6B3FA0] px-2 p-1 text-white rounded-full'>
                                <small>Dashboard</small>
                            </Link>
                            <Link to={`/logout`}
                                // onClick={onLogout}
                                className='border-[#6B3FA0] text-[#6B3FA0] hover:border-[#6B3FA0] hover:text-[#6B3FA0] hover:bg-[#6B3FA0] hover:bg-opacity-10'
                            >Logout
                            </Link>
                        </div>
                    </div>
                </>
            )
            
            
            :
                (<> 
                    <div>
                        <Link to={`/`} className='font-bold text-white'>TranscriptDigita</Link>
                    </div>
                    <div className='md:text-[14px] justify-evenly flex-1 hidden md:flex'>
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
                                className='md:block hidden bg-[#6B3FA0] hover:bg-[#6B3FA0]'
                            >
                            Sign in
                            </Button>
                        </Link>
                    </div>
                </>
                )
            }
            {isOpen ?

              (<HiXMark
                size={40}
                className='block md:hidden' 
                onClick={toggleNavbar}
              />  )

              :

              (<HiBars3 
                size={40}
                className='block md:hidden' 
                onClick={toggleNavbar}
              />)

            }
            
        </div>
        {isOpen ?

            <MobileMenu/>
        :

            ``
        }
   </div>
  )
}

export default Navbar