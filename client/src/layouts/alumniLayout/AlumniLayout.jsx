// react imports
import React from 'react'

// rrd imports
import { Outlet } from 'react-router-dom'

// redux imports
import { useSelector } from 'react-redux';

// components import
import { Navbar, Sidebar } from '../../components'

// icons imports
import {HiOutlineRectangleGroup, HiListBullet, HiOutlineBell, HiOutlineCog6Tooth} from 'react-icons/hi2'

function AlumniLayout() {

    const { user } = useSelector((state) => state.auth)

    const menuItems = [
        {
            title: 'Dashboard',
            icon: <HiOutlineRectangleGroup size={20}/>,
            path: `/alumni/${user.alumni._id}/dashboard`,
            isActive: true
        },
    
        {
            title: 'Transcripts',
            icon: <HiListBullet size={20}/>,
            path: `/alumni/${user.alumni._id}/transcripts/`
        },
    
        {
            title: 'Notification',
            icon: <HiOutlineBell size={20}/>,
            path: ''
        },
    
        {
            title: 'Settings',
            icon: <HiOutlineCog6Tooth size={20}/>,
            path: `/alumni/${user.alumni._id}/change-password`
        },
    
    ]

  return (
    <div className='flex-1 grid grid-cols-1 md:grid-cols-5 w-full fixed h-screen'>
        {/* sidebar */}
        <div className='bg-white md:block hidden'>
            <Sidebar menuItems={menuItems}/>
        </div>

        <div className='md:col-span-4 flex flex-col '>
            <Navbar/>
            <div className='flex-1 flex flex-col overflow-y-auto p-4 bg-slate-100'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AlumniLayout