// react imports
import React from 'react'

// containers imports
import { Contact, Footer, Header, OurPartners, Services, Testimonials, WNU } from '../../containers'

function LandingPage() {
  return (
    <div className='flex flex-col flex-1 md:p-5 p-3 mt-5 gap-y-[50px]'>
        <Header/>
        <WNU/>
        <Services/>
        <OurPartners/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage