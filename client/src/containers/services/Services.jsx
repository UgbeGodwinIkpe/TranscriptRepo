// react imports
import React from 'react'

// assets imports
import servicesImg1 from '../../assets/services1.png' 
import servicesImg2 from '../../assets/services2.png' 
import servicesImg3 from '../../assets/services3.png' 


function Services() {
  return (
    <div className='flex flex-col items-center gap-y-[50px]'>
        <div className='flex flex-col items-center md:w-7/12 gap-y-[8px]'>
            <h4 className='font-bold md:text-[40px]'>Our Services</h4>
            <p className='font-light md:text-[16px]'>Unlock the Convinience of our streamlined services and experience the power of hassle free transcript retrieval. Say good bye to ime consuming paperwork and frustrating bureaucracy.</p>
        </div>
        
        <div className='w-full grid grid-cols-2 md:grid-cols-4 md:gap-x-[20px] gap-[20px]'>
            <div className='flex flex-col border rounded-[5px]'>
                <img src={servicesImg1} alt="services1" />
                <div className="flex flex-col p-3">
                    <h4>Easy Transcript Access</h4>
                    <ul>
                        <li>Instant Access</li>
                        <li>User-Friendly access</li>
                    </ul>
                </div>           
            </div>

            <div className='flex flex-col border rounded-[5px]'>
                <img src={servicesImg2} alt="services1" />
                <div className="flex flex-col p-3">
                    <h4>Transcript Request</h4>
                    <ul>
                        <li>Request Management</li>
                        <li>Digital Request</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col border rounded-[5px]'>
                <img src={servicesImg3} alt="services1" />
                <div className="flex flex-col p-3">
                    <h4>Comprehensive coverage</h4>
                    <ul>
                        <li>Wide coverage</li>
                        <li>Reliable partnerships</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col border rounded-[5px]'>
                <img src={servicesImg1} alt="services1" />
                <div className="flex flex-col p-3">
                    <h4>Fast and Reliable</h4>
                    <ul>
                        <li>Expedited services</li>
                        <li>Trackable Delivery</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services