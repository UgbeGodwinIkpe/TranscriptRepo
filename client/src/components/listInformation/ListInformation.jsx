import React from 'react'

function ListInformation({title}) {
  return (
    <div className='flex flex-col gap-y-4 md:p-5 rounded-lg border  '>
        <h4>{title}</h4>
        <div className='flex flex-col gap-y-2'>
            <span className='flex gap-x-4'>
                <p>Name:</p>
                <p className='text-slate-200'>Manoah Luka k</p>
            </span> 

            <span className='flex gap-x-2'>
                <p>Reg no:</p>
                <p className='text-slate-200'>Uj/2015/ns/0190</p>
            </span>  

            <span className='flex gap-x-2'>
                <p>Department:</p>
                <p className='text-slate-200'>Mathematics</p>
            </span> 

            <span className='flex gap-x-2'>
                <p>Faculty:</p>
                <p className='text-slate-200'>Natural scinces</p>
            </span> 

            <span className='flex gap-x-2'>
                <p>Institution:</p>
                <p className='text-slate-200'>University of jos</p>
            </span> 
        </div>
    </div>
  )
}

export default ListInformation