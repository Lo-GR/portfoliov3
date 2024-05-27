import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type ExperienceNodeProps = {
  dataSet: {
    company: string
    title: string
    dateStart: string
    dateEnd: string
    location: string
    experience: string[]
  }
}

const ExperienceNode = ({ dataSet }: ExperienceNodeProps) => {
  const { company, title, dateStart, dateEnd, location, experience } = dataSet;
  return (
    <div className='flex flex-col p-5 gap-12'>
      <div>
        <h3>{company}</h3>
        <h4>{title}</h4>
      </div>

      <div>
        <div className='flex'>
          <CalendarMonthIcon sx={{}} />
          <p>{dateStart} - {dateEnd}</p>
        </div>
        <div className='flex'>
          <LocationOnIcon sx={{}} />
          <p>{location}</p>
        </div>
      </div>

      <ul>
        {experience.map(e => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default ExperienceNode