import React from 'react'

function Progress({verified = true}) {
  return (
    <div className='flex items-center gap-x-2'>
        <div className='flex flex-col items-center'>
            <span className='flex justify-center p-2 h-8 w-8 rounded-full bg-green-300'>
               {verified ? <small>1</small> : <small>0</small>} 
            </span>

            <p className='md:block hidden'>Verified</p>
        </div>

        <div className='border-b w-full'>

        </div>

        <div className='flex flex-col items-center'>
            <span className='flex justify-center p-2 h-8 w-8 rounded-full bg-green-300'>
               {verified ? <small>2</small> : <small>0</small>} 
            </span>

            <p className='md:block hidden'>Processing</p>
        </div>

        <div className='border-b w-full'>

        </div>

        <div className='flex flex-col items-center'>
            <span className='flex justify-center p-2 h-8 w-8 rounded-full bg-green-300'>
               {verified ? <small>3</small> : <small>0</small>} 
            </span>

            <p className='md:block hidden whitespace-nowrap'>Request accepted</p>
        </div>

        <div className='border-b w-full'>

        </div>

        <div className='flex flex-col items-center'>
            <span className='flex justify-center p-2 h-8 w-8 rounded-full bg-slate-200'>
               {verified ? <small>4</small> : <small>0</small>} 
            </span>

            <p className='md:block hidden'>Delivered</p>
        </div>

    </div>
  )
}

export default Progress