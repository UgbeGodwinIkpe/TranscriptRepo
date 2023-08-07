import React from 'react'

function Information({title, message}) {
  return (
    <div className='flex flex-col gap-y-4'>
        <h4 className='font-semibold'>{title}</h4>
        <p className='font-light text-[14px]'>{message}</p>
    </div>
  )
}

export default Information