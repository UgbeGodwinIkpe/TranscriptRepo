// react imports
import React from 'react'

// components imports
import { Sidebar } from '../../../components'

// containers imports
import { RecentRequests, TranscriptData, TranscriptGrid } from '../../../containers'

function Dashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4'>
        <div className='md:col-span-2 flex flex-col gap-y-4'>
            {/* charts section */}
            <div className="flex flex-col bg-white rounded-md md:h-1/2">
                {/* <ChartSection/> */}
            </div>

            {/* recent request sction */}
            <div className='flex flex-col h-[289px] rounded-md my-auto p-5 overflow-y-scroll bg-white'>
                <h4 className='md:text-[18px] font-bold'>Recent Requests</h4>
                <RecentRequests/>
            </div>
        </div>

        <div className='flex flex-col gap-y-4'>
            <div className='grid grid-cols-1 border rounded-md bg-white p-5'>
                <TranscriptData title={`Transcript Data`} />
            </div>

            {/* completed request section */}
            <div className='grid grid-cols-1 p-5 rounded-md bg-white h-1/2'>
                <TranscriptGrid title={`Completed Requests`} />
            </div>
        </div>
    </div>  
  )
}

export default Dashboard