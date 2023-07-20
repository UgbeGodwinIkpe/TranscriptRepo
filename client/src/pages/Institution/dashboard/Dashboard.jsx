// react imports
import React from 'react'

// components imports
import { Sidebar } from '../../../components'

// containers imports
import { ChartSection } from '../../../containers'

function Dashboard() {
  return (
    <div className='flex-1 grid grid-cols-1 md:grid-cols-5 bg-slate-100'>
        {/* sidebar */}
        <div className='bg-white md:block hidden'>
            <Sidebar/>
        </div>
        <div className='md:col-span-4 grid grid-cols-1 md:grid-cols-3'>
            <div className='md:col-span-2 p-4 flex flex-col gap-y-4'>
                {/* charts section */}
                <div className="flex flex-col bg-white rounded-md md:h-1/2">
                    <ChartSection/>
                </div>

                {/* recent request sction */}
                <div className='flex flex-col p-5 bg-white'>
                    <h4>Recent Requests</h4>
                </div>
            </div>

            <div className='flex my-4 md:mr-4 bg-white rounded-md p-5'>
                {/* completed request section */}
                <h4>Completed requests</h4>
            </div>
        </div>
    </div>
  )
}

export default Dashboard