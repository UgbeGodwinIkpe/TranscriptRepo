import React from 'react'

import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlineTruck } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function AlumniNavbar() {

    const menu = [
        {
            title: 'Request',
            icon: <HiOutlineEnvelope/>,
            isActive: true
        },

        {
            title: 'Track process',
            icon: <HiOutlineMapPin/>,
            isActive: false
        },

        {
            title: 'Delivery Request',
            icon: <HiOutlineTruck/>,
            isActive: false
        },
    ]

  return (
    <div className='flex flex-col bg-white gap-y-4 shadow-lg'>
        <div  className='flex p-2'>
            <h4>Federal University Minna</h4>
        </div>
        <hr />
        <div className="grid grid-cols-3 text-center">
            {menu && menu.map((item)=>(
                <Link to={item.path} key={item.title} className={`${item.isActive ? `bg-[#6B3FA0] text-white` : `border-white`} flex flex-col md:flex-row items-center justify-center gap-x-4 border-b-2 cursor-pointer p-2`}>
                    {item.icon} 
                    <h4>{item.title}</h4>
                </Link>
            ))}
            
        </div>
    </div>
  )
}

export default AlumniNavbar