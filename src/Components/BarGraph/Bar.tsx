import React from 'react'
import { motion } from 'framer-motion';

type BarProps = {
  dataPoint: {
    name: string
    value: number
  }
}

const Bar = ({ dataPoint }: BarProps) => {
  let val = "";
  let text = "";
  let wide = "";

  switch (dataPoint.value) {
    case 1:
      val = "bg-sp-contrast-orange-400"
      text = 'Learning'
      wide = "25%"
      break
    case 2:
      val = 'bg-sp-contrast-yellow-400'
      text = 'Familiar'
      wide = "50%"
      break
    case 3:
      val = 'bg-sp-contrast-blue-500'
      text = 'Experienced'
      wide = "75%"
      break
    case 4:
      val = 'bg-sp-contrast-green-400'
      text = 'Proficient'
      wide = "100%"
      break
    default:
      text = 'error'
  }

  const barVariants = {
    visible: (width: string) => ({
      width: width,
      transition: {
        duration: 1,
      },
    }),
    initial: {
      width: "0%"
    },
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
        <motion.div
          custom={wide}
          variants={barVariants}
          initial='initial'
          whileInView='visible'
          viewport={{ once: true }}
          className={`${val} h-5/6 rounded-r`}
        />
        <p className='absolute ml-6'>{text}</p>
      </div >

    </div>
  )
}

export default Bar