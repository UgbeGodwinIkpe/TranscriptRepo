import React from 'react'

function AlumniNavbar() {

    const menu = [
        {
            title: 'Request',
            icon: ''
        },

        {
            title: 'Track process',
            icon: ''
        },

        {
            title: 'Delivery Request',
            icon: ''
        },
    ]

  return (
    <div className='flex flex-col bg-white gap-y-4'>
        <div  className='flex p-2'>
            <h4>Federal University Minna</h4>
        </div>
        <hr />
        <div className="grid grid-cols-3 text-center">
            {menu && menu.map((item)=>(
                <span className='border-b-2 border-white hover:border-b-2 hover:border-[#6B3FA0] bg-opacity-5 hover:bg-slate-50 cursor-pointer p-2'>{item.title}</span>
            ))}
            
        </div>
    </div>
  )
}

export default AlumniNavbar