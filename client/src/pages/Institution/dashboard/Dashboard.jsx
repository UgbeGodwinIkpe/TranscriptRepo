// react imports
import React from 'react'

// components imports
import { Sidebar } from '../../../components'

// containers imports
import { ChartSection, RecentRequests, TranscriptGrid } from '../../../containers'

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
                <div className='flex flex-col h-[289px] rounded-md my-auto p-5 overflow-y-scroll bg-white'>
                    <h4 className='md:text-[18px] font-bold'>Recent Requests</h4>
                    <RecentRequests/>
                </div>
            </div>

            <div className='flex my-4 md:mr-4 bg-white rounded-md p-5'>
                {/* completed request section */}
                <TranscriptGrid title={`Completed Requests`} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard