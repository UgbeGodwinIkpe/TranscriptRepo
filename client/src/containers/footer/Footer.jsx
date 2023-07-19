// react imports
import React from 'react'

function Footer() {
  return (
    <div className='h-[300px] md:w-[1440px] bg-[#6B3FA0] flex -m-5 flex-col text-white p-5'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-x-[20px]'>
            <div>
                <h4>TranscriptDigita</h4>
            </div>

            <div className='flex flex-col gap-y-[8px]'>
                <h4 className='font-semibold'>About us</h4>
                <ul className='text-[14px] font-light gap-y-[6px]'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className='flex flex-col gap-y-[8px]'>
                <h4 className='font-semibold'>Services</h4>
                <ul className='text-[14px] font-light gap-y-[6px]'>
                    <li>Transcript Request</li>
                    <li>Transcript Approval</li>
                    <li>Transcript Delivery</li>
                </ul>
            </div>

            <div className='flex flex-col gap-y-[8px]'>
                <h4 className='font-semibold'>Contact Us</h4>
                <ul className='text-[14px] font-light gap-y-[6px]'>
                    <li>Transcriptdigita@gmail.com</li>
                </ul>
            </div>

            <div className='flex flex-col gap-y-[8px]'>
                <h4 className='font-semibold'>Social</h4>
                <ul className='text-[14px] font-light gap-y-[6px]'>
                    <li></li>
                </ul>
            </div>
        </div>
        <span>
            
        </span>
    </div>
  )
}

export default Footer