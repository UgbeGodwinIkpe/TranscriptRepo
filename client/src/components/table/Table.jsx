import React from 'react'
import TranscriptItem from '../transcriptItem/TranscriptItem'

function Table() {
  return (
    <div className='grid grid-cols-1 '>
        <table className='table-auto  grid grid-cols-1 gap-y-[8px]'>
            <thead className='grid grid-cols-1'>
                <tr className='grid grid-cols-4 md:text-[14px]'>
                    <td>Request No</td>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Year of Graduation</td>
                </tr>
            </thead>
            <tbody>
                <tr className='grid grid-cols-1 gap-y-[8px]'>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                    <TranscriptItem/>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table