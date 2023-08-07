import React from 'react'
import { AlumniNavbar } from '../../../../components'
import { AlumniDetailsForm } from '../../../../containers'

function NewRequestPage() {
  return (
    <div className='flex flex-col container gap-y-4'>
      <div className=''>
        <AlumniNavbar/>
      </div>

      <AlumniDetailsForm/>
    </div>
  )
}

export default NewRequestPage