import React from 'react'
import Table from '../../components/table/Table'

function RecentRequests() {

  const headers = [
    {
      title: 'Request No'
    },

    {
      title: 'Name'
    },

    {
      title: 'Department'
    },

    {
      title: 'Year of graduation'
    },

  ]

  return (
    <div className='md:block hidden flex flex-col md:p-5 p-3'>
        <Table headers={headers}/>
    </div>
  )
}

export default RecentRequests