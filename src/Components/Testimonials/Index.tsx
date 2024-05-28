import PersonIcon from '@mui/icons-material/Person';
import { motion } from 'framer-motion';

type TestimonialsProps = {
  data: {
    name: string
    title: string
    kindWords: string
  }[]
}

const Testimonials = ({ data }: TestimonialsProps) => {
  const tileVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    initial: {
      opacity: 0,
      y: 100,
    },
  }
  return (
    <div>
      <h2 className='mb-6'>Testimonials</h2>

      <div className='flex flex-col justify-between gap-12 lg:gap-0 lg:flex-row' >
        {data.map(t => {
          return (
            <motion.div
              variants={tileVariants}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              key={t.name}
              className='p-5 rounded border-sp-background-300 border-2 border-solid flex-col flex justify-between gap-6 w-full lg:w-[30%]'>
              <p>{t.kindWords}</p>
              <div className='flex gap-3'>
                <PersonIcon sx={{ color: "#33332D" }} />
                <p>{t.name} - {t.title}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}

export default Testimonials