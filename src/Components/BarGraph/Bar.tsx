import React from 'react'

type BarProps = {
  dataPoint: {
    name: string
    value: number
  }
}

const Bar = ({ dataPoint }: BarProps) => {
  let val = "";
  switch (dataPoint.value) {
    case 1:
      val = "w-1/4 bg-"
  }

  return (
    <div>

    </div>
  )
}

export default Bar