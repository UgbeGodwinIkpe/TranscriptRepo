// mui imports
import { Button } from '@mui/material'

// react imports
import React, { useState } from 'react'

// assets imports
import university from '../../assets/university.png'
import alumni from '../../assets/alumni.png'

// rrd imports
import { Link } from 'react-router-dom'

function SelectLogin() {

    const [hover, setHover] = useState(false)
  return (
    <div className='overflow-y-auto flex flex-1 justify-center justify-items-center'>
        <div className="p-5 rounded-lg w-full gap-y-8 flex flex-col">

            <h4 className='text-center font-bold'>Continue as</h4>

            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-y-4 md:gap-y-0 md:gap-x-16'>
                <div className="border p-2 gap-y-2 rounded-md flex flex-col items-center">
                    <img src={university} alt="unipic" />
                    <h4>university</h4>
                    <Link to={`/institution/login`}>
                        <Button
                            variant='contained'
                            className={`hover:text-white hover:bg-[#6B3FA0] lowercase ${hover ? `text-white bg-[#6B3FA0]` : `bg-slate-200 text-slate-500`}`}
                            onMouseOver={()=>{setHover(true)}}
                            onMouseOut={()=>{setHover(false)}}
                        >  
                            continue
                        </Button>
                    </Link>
                </div>

                <div className="border p-2 gap-y-2 rounded-md flex flex-col items-center">
                    <img src={alumni} alt="alumnipic" />
                    <h4>Alumni</h4>
                    <Link to={`/alumni/login`}> 
                        <Button
                            variant='contained'
                            className={`hover:bg-slate-200 hover:text-slate-500 lowercase ${hover ? `bg-slate-200 text-slate-500` : `text-white bg-[#6B3FA0]`}`}
                            onMouseOver={()=>{setHover(true)}}
                            onMouseOut={()=>{setHover(false)}}
                        >
                            continue
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectLogin