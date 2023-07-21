// react imports
import React from 'react'

// rrd imports
import { Outlet } from 'react-router-dom'

// components import
import { Sidebar } from '../../components'

// icons imports
import {HiOutlineRectangleGroup, HiListBullet, HiOutlineBell, HiOutlineCog6Tooth} from 'react-icons/hi2'

function AlumniLayout() {

    const menuItems = [
        {
            title: 'Dashboard',
            icon: <HiOutlineRectangleGroup size={20}/>,
            path: ''
        },
    
        {
            title: 'Alumni List',
            icon: <HiListBullet size={20}/>,
            path: ''
        },
    
        {
            title: 'Request',
            icon: <HiOutlineBell size={20}/>,
            path: ''
        },
    
        {
            title: 'Settings',
            icon: <HiOutlineCog6Tooth size={20}/>,
            path: ''
        },
    
    ]

  return (
    <div className='flex-1 grid grid-cols-1 md:grid-cols-5 bg-slate-100'>
        {/* sidebar */}
        <div className='bg-white md:block hidden'>
            <Sidebar menuItems={menuItems}/>
        </div>

        <div className='md:col-span-4 grid grid-cols-1'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AlumniLayout