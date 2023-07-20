import React from 'react';

// componets imports
import { LineChart } from '../../components';

function chartSection() {
  return (
    <div className='flex flex-col p-5 bg-white rounded-md gap-y-4 md:h-1/2'>
        <h4 className='fonr-bold'>Total Transcripts requests</h4>
        <p className='font-light text-[12px]'>A summary of the total number of transcript requests recieved through the platform.</p>
        <LineChart/>
    </div>
  )
}

export default chartSection