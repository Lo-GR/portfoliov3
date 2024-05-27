import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { motion } from 'framer-motion';


type NodeLineProps = {}

const NodeLine = ({ }: NodeLineProps) => {
  const lineVariants = {
    visible: {
      height: "100%",
      transition: {
        duration: 1,
      },
    },
    initial: {
      height: "0%"
    },
  }
  const startingVariants = {
    visible: {
      color: '#33332D',
      scale: 1,
      transition: {
        duration: .5,
      },
    },
    initial: {
      scale: .8,
      color: '#82D2F7'
    },
  }
  const endingVariants = {
    visible: {
      color: '#33332D',
      scale: 1,
      opacity: 1,
      transition: {
        delay: .5,
        duration: .5,
      },
    },
    initial: {
      scale: .8,
      opacity: 0,
      color: '#82D2F7'
    },
  }
  return (
    <div className='h-40 w-full flex flex-col items-center'>
      <motion.div
        variants={startingVariants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <RadioButtonCheckedIcon sx={{ fontSize: "x-large" }} />
      </motion.div>
      <motion.div
        variants={lineVariants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
        className='w-1 bg-sp-text-300'
      />
      <motion.div
        variants={endingVariants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <RadioButtonCheckedIcon sx={{ fontSize: "x-large" }} />
      </motion.div>
    </div>
  )
}

export default NodeLine