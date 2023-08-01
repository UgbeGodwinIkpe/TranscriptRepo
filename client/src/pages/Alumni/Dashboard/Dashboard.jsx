// react imports
import React from 'react'
import {HiOutlinePlusSmall} from 'react-icons/hi2';

// component imports
import { Table } from '../../../components'

// mui imports
import { Button } from '@mui/material'

// rrd imports
import { Link } from 'react-router-dom';

// redux imports
import { useSelector } from 'react-redux';

function Dashboard() {

  const { user } = useSelector((state) => state.auth)

  return (
    <div className='flex flex-1 flex-col bg-white rounded-md md:p-5'>
      <div className='flex justify-end'>
        <Link to={`/alumni/${user._id}/transcripts/new`}>
          <Button
            variant='contained'
            className='bg-blue-400'
            endIcon={<HiOutlinePlusSmall/>}
          >
            New Request
          </Button>
        </Link>
      </div>

       <div className="flex flex-col p-5">
          <Table headers={[{title: 'S/no'}, {title: 'Student Name'}, {title: 'Year of grad.'} , {title: 'Grad Year'} ]}/>
        </div> 
    </div>
  )
}

export default Dashboard