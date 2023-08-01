import { ClassNames } from '@emotion/react'
import React from 'react'

function TranscriptItem({cols, item}) {
  return (
    <div className={`grid md:text-[14px] grid-cols-4 p-2 border-b rounded-md`}>
      <td className='text-[#6B3FA0] font-bold'>Uj-009</td>
      <td>Manoah Luka k</td>
      <td>Mathematics</td>
      <td>2019/2020</td>
    </div>
  )
}

export default TranscriptItem