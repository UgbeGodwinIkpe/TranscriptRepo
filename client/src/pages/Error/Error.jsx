import { Button } from '@mui/material'
import React from 'react'

function Error() {
  return (
    <div className='text-[#6B3FA0] grid grid-cols-1 flex items-center justify-items-center justify-center gap-y-4'>
        <h1 className=' md:text-[300px] font-bold text-[150px]'>404</h1>
        <p>Oooooops!... page not found</p>
        <Button
            variant='contained'
            className='lowercase bg-[#6B3FA0]'
        >
            Go back home
        </Button>
    </div>
  )
}

export default Error