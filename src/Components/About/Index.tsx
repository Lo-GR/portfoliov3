import { about } from '../../Utils/content'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type AboutProps = {}

const About = ({ }: AboutProps) => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
      <div className='flex flex-col justify-evenly h-[500px] lg:w-1/2'>
        <h2>
          {about.title}
        </h2>
        <p>
          {about.bio}
        </p>
        <a href={about.linkedin} target="_blank" rel="noreferrer" className="w-full h-full flex justify-around items-center flex-col">
          <LinkedInIcon sx={{ fontSize: '12rem', color: '#33332D' }} />
        </a>
      </div>
      <div className='lg:w-5/12'>
        <img className='rounded-full' src={about.image} alt='Image of Logan' />
      </div>

    </div>
  )
}

export default About