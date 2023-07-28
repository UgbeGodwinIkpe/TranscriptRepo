import React from 'react'

function TranscriptDataItem({dataName, number}) {
  return (
    <div className='grid grid-cols-3 items-center'>
        <h4 className='md:text-[12px] col-span-2 whitespace-nowrap'>{dataName}</h4>
        <div className='rounded-md flex border items-center justify-items-center justify-center border-[#6B3FA0] p-1'>
            <h4 className='text-center text-[15px]'>{number}</h4>
        </div>
    </div>
  )
}

export default TranscriptDataItem