// react imports
import React from 'react'
import { Sidebar } from '../../../components'

function Dashboard() {
  return (
    <div className='flex-1 grid grid-cols-1 md:grid-cols-5 bg-slate-100'>
        {/* sidebar */}
        <div className='bg-white md:block hidden'>
            <Sidebar/>
        </div>
        <div className='md:col-span-4 grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2 p-4 grid grid-cols-1 gap-y-4'>
                {/* charts section */}
                <div className="grid grid-cols-1 bg-white rounded-md">

                </div>

                {/* recent request sction */}
                <div className='grid grid-cols-1 bg-white'>

                </div>
            </div>

            <div className='flex my-4 md:mr-4 bg-white rounded-md'>
                {/* completed request section */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard