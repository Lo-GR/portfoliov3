import React from 'react'
import MainContainer from '../MainContainer/Index'

type BarProps = {
  dataPoint: {
    name: string
    value: number
  }
}

const Bar = ({ dataPoint }: BarProps) => {
  let val = "";
  let text = "";
  switch (dataPoint.value) {
    case 1:
      val = "w-1/4 bg-sp-contrast-orange-400"
      text = 'Learning'
      break
    case 2:
      val = 'w-1/2 bg-sp-contrast-yellow-400'
      text = 'Familiar'
      break
    case 3:
      val = 'w-3/4 bg-sp-contrast-blue-500'
      text = 'Experienced'
      break
    case 4:
      val = 'w-full bg-sp-contrast-green-400'
      text = 'Proficient'
      break
    default:
      text = 'error'
  }

  return (
    <div className='w-full h-8 flex items-center'>
      {/* Axis description */}
      <div className='w-32'>
        <p className=''>
          {dataPoint.name}
        </p>
      </div>

      {/* Bar itself */}
      <div className='h-full w-full flex items-center border-l-sp-text-300 border-l-2 border-solid'>
        <div className={`${val} h-5/6 rounded-r`} />
        <p className='absolute ml-6'>{text}</p>
      </div >

    </div>
  )
}

export default Bar