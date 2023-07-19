// react imports
import React from 'react'

function Footer() {
  return (
    <div className='h-[300px] md:w-full  flex flex-col text-white'>
        <div className="flex flex-col bg-[#6B3FA0] -mx-5 p-5">
            <div className='grid grid-cols-2 md:grid-cols-5 gap-x-[20px] h-72'>
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
            <hr />
            <span className='flex justify-center items-end'>     
                <small className='font-light'>@{Date.now()}Transcriptdigita All Right reserved</small>
            </span>
        </div>     
    </div>
  )
}

export default Footer