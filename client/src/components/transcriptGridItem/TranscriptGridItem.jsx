import React from 'react'

import {HiCheckCircle} from 'react-icons/hi2'

function TranscriptGrid({data, icon}) {
  return (
    <div className='flex w-full items-center rounded-lg justify-between md:p-4 p-2 bg-[#6B3FA0] cursor-pointer bg-opacity-5 hover:border hover:border-[#6B3FA0]'>
        <div className={``}>
          <h4 className='md:text-[14px]'>{data}</h4>
        </div>
        <div>
          {icon && icon}
        </div>
    </div>
  )
}

export default TranscriptGrid