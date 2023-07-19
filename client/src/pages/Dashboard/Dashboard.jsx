// react imports
import React from 'react'

// pages imprts
import LandingPage from '../Landing/LandingPage'

// components imports
import { Sidebar } from '../../components'

function Dashboard() {
  return (
    <div className='flex flex-col'>
      {/* conditionally show between user dashboard or landing page */}
        <LandingPage/>
    </div>
  )
}

export default Dashboard