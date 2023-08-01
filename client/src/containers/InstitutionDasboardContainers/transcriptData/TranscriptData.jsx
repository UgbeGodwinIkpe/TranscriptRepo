import React from 'react'
import { TranscriptDataItem } from '../../../components'

function TranscriptData({title}) {

    const dataItems = [
        {
            dataName: 'Total Transcript request',
            number: '7,000'
        },

        {
            dataName: 'Total Transcript verified',
            number: '4,500'
        },
        {
            dataName: 'Total Transcript uploaded',
            number: '1,200'
        },
        {
            dataName: 'Total Transcript Queried',
            number: '900'
        },
        {
            dataName: 'Total Transcript rejected',
            number: '250'
        },
    ]
  return (
    <div className='flex flex-col gap-y-4'>
        {title && <h4 className='font-bold'>{title}</h4>}
        <hr />
        <div className='flex flex-col gap-y-2'>
            {dataItems && dataItems.map((dataItem)=> (
                <TranscriptDataItem 
                    key={dataItem}
                    dataName={dataItem.dataName}
                    number={dataItem.number}
                />
            ))}
                      
        </div>
        
    </div>
  )
}

export default TranscriptData