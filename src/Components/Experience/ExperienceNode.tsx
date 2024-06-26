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
    <div className='flex flex-col gap-12'>
      <div>
        <h3>{company}</h3>
        <h4>{title}</h4>
      </div>

      <div>
        <div className='flex gap-3'>
          <CalendarMonthIcon sx={{ color: "#33332D" }} />
          <p>{dateStart} - {dateEnd}</p>
        </div>
        <div className='flex gap-3'>
          <LocationOnIcon sx={{ color: "#33332D" }} />
          <p>{location}</p>
        </div>
      </div>

      <ul>
        {experience.map((e, i) => {
          return (
            <div key={e} className='flex flex-col gap-2 mb-4'>
              <li>{e}</li>
              <div className='w-full h-[2px] bg-sp-text-300 rounded' />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ExperienceNode