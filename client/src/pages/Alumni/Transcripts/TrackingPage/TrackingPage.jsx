import React from 'react'
import {HiOutlineChevronRight} from 'react-icons/hi2'

import { AlumniNavbar, Table, TranscriptGridItem } from '../../../../components'

function TrackingPage() {
  return (
    <div className='p-5 flex flex-col h-5/6 gap-y-4'>
        <AlumniNavbar/>
        <div className='p-2 bg-white'>
            <Table headers={[{title: `Transcript No.`}]} item={<TranscriptGridItem icon={<HiOutlineChevronRight/>} />}/>
        </div>
    </div>
  )
}

export default TrackingPage