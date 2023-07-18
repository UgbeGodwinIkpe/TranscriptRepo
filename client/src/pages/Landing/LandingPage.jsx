// react imports
import React from 'react'

// containers imports
import { Header, Services, WNU } from '../../containers'

function LandingPage() {
  return (
    <div className='flex flex-col flex-1 md:p-5 p-3 gap-y-[50px]'>
        <Header/>
        <WNU/>
        <Services/>
    </div>
  )
}

export default LandingPage