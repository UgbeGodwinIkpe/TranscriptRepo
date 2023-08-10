import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice' 

function Logout() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <div className='flex flex-col flex-1'>
        <div className='flex flex-col m-auto border rounded-md p-5 gap-y-5 shadow-lg'>
            <h4 className='text-[20px]'>Are you are you want to logout ?</h4>
            <button onClick={()=>{onLogout()}} className='p-2 rounded-md bg-gradient-to-r from-[#6B3FA0] via-zinc-500 to-slate-400 text-white'>
                Logout
            </button>
        </div>
    </div>
  )
}

export default Logout