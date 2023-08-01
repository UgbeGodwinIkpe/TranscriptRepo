// react imports
import React from 'react'
import { Table } from '../../../components'

function Dashboard() {
  return (
    <div className='flex flex-1 flex-col bg-white rounded-md'>
       <div className="flex flex-col p-5">
          <Table headers={[{title: 'S/no'}, {title: 'Student Name'}, {title: 'Year of grad.'} , {title: 'Grad Year'} ]}/>
        </div> 
    </div>
  )
}

export default Dashboard