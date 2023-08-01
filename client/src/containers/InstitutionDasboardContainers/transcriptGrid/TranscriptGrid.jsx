import React from 'react'
import { TranscriptGridItem } from '../../../components'

import {HiCheckCircle, HiTrash} from 'react-icons/hi2'

function TranscriptGrid({title}) {
  return (
    <div className='flex flex-col w-full gap-y-[8px]'>
        {title && <h4>{title}</h4>}

        <div className='grid grid-cols-1 gap-y-[8px]'>
            <TranscriptGridItem icon={<HiCheckCircle fill='#4BD37B' size={25}/>} />
            <TranscriptGridItem icon={<HiTrash fill='#4BD37B' size={20} />} />
            <TranscriptGridItem />
        </div>
    </div>
  )
}

export default TranscriptGrid