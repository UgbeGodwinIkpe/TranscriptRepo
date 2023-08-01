import React from 'react'
import { AlumniNavbar } from '../../../../components'
import { AlumniDetailsForm } from '../../../../containers'

function NewRequestPage() {
  return (
    <div className='flex flex-col gap-y-4 h-5/6'>
        <AlumniNavbar/>
        <AlumniDetailsForm/>
    </div>
  )
}

export default NewRequestPage