import { about } from '../../Utils/content'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type AboutProps = {}

const About = ({ }: AboutProps) => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
      <div className='flex flex-col gap-12 lg:w-1/2'>
        <h2>
          {about.title}
        </h2>
        <p>
          {about.bio}
        </p>
        <a href={about.linkedin} target="_blank" rel="noreferrer" className="flex justify-around items-center">
          <LinkedInIcon sx={{ fontSize: '6rem', color: '#33332D' }} />
        </a>
      </div>
      <div className='lg:w-5/12'>
        <img className='rounded-full' src={about.image} alt='Logan Roth' />
      </div>

    </div>
  )
}

export default About