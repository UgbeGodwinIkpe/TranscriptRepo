import React from 'react'

function Table({headers, item}) {
  return (
    <div className='grid grid-cols-1 '>
        <table className='table-auto  grid grid-cols-1 gap-y-[8px] border rounded-md p-1'>
            <thead className='grid grid-cols-1 p-4 md:p-2'>
                {headers && 
                    <tr className={`grid grid-cols-${headers.length} md:text-[14px] `}>
                        {headers && headers.map((header)=> (
                            <td>{header.title}</td>
                        ))}
                    </tr>
                }
            </thead>
            <hr />
            <tbody>
                <tr className='grid grid-cols-1 gap-y-[8px]'>
                    {item && item}
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table