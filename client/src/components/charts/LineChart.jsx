// react-imports
import React, { useEffect, useState } from 'react'

// chartjs imports
import {Line} from 'react-chartjs-2';


import {

    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement

} from 'chart.js'

ChartJS.register(

    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function LineChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(()=>{

        setChartData({
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec' ],
            datasets: [
                {
                    label: "request",
                    fill: false,
                    data: [5, 10, 15, 4, 9, 20, 12, 15, 6, 6, 3, 10],
                    borderColor: '#6B3FA0',
                    pointBorderColor : 'transparent',
                    backgroundColor: 'red' ,
                    backgroundColor: '#6B3FA0',
                    tension: 0.3
                },
            ],
        })

        setChartOptions({
            maintainAspectRatio: false,
            responsive: true,
            plugins:{
                legend: { position: 'top'},
                title: { display: true, text: 'Requests'},
            },

            scales: {
                x: { border: {display: false}, grid: {display: false}},
                y: { border: {display: false}, grid: {display: false}},
            }
        
        })

    }, [])

  return (
    <div className='flex md:h-[150px] w-full'>
        <Line
            data={chartData}
            options={chartOptions}
            className='w-auto'
        />
    </div>
  )
}

export default LineChart