import React from 'react'
import Bar from './Bar'

type BarGraphProps = {
  data: {
    name: string
    value: number
  }[]
}

const BarGraph = ({ data }: BarGraphProps) => {
  return (
    <div className='w-full flex flex-col gap-6'>
      {data.map(d => {
        return <Bar dataPoint={d} />
      })}
    </div>
  )
}

export default BarGraph