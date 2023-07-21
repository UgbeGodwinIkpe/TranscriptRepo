import React from 'react'
import { Sidebar } from '../../components'
import { Outlet } from 'react-router-dom'

function InstitutionLayout() {
  return (
    <div className='flex-1 grid grid-cols-1 md:grid-cols-5 bg-slate-100'>
        {/* sidebar */}
        <div className='bg-white md:block hidden'>
            <Sidebar/>
        </div>
        <div className='md:col-span-4 grid grid-cols-1'>
           <Outlet/>
        </div>
    </div>
  )
}

export default InstitutionLayout