import React from 'react'
import LandingPage from '../Landing/LandingPage'

function Dashboard() {
  return (
    <div className='flex flex-col'>
      {/* conditionally show between user dashboard or landing page */}
        <LandingPage/>
    </div>
  )
}

export default Dashboard