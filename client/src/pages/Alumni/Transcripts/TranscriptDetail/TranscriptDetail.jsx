import React from 'react'
import { Information, ListInformation, Progress } from '../../../../components'

function TranscriptDetail() {
  return (
    <div className='flex flex-col flex-1 bg-white p-5 rounded-md gap-y-4'>
        <Progress/>
        <Information title={`Request Accepted`} message={`Dear Federal university Minna Administration,
We are pleased to inform you that the transcript request for [Student Name] has been successfully accepted. Our team acknowledges the importance of this request and is dedicated to processing it promptly.
Please note that the processing time may take up to two weeks due to the high volume of requests we receive. We appreciate your patience during this period as we ensure the accuracy and quality of the transcripts we provide.`} />
        <div className='grid grid-cols-2 gap-x-5'>
            <ListInformation title={`Student Information`} />
        </div>
    </div>
  )
}

export default TranscriptDetail