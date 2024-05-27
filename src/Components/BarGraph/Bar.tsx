import React from 'react'

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
      val = 'w-1/5 bg-sp-contrast-yellow-400'
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
    <div>
      <div>

      </div>

    </div>
  )
}

export default Bar