import ExperienceNode from './ExperienceNode'
import NodeLine from './NodeLine'

type ExperienceProps = {
  data: {
    company: string
    title: string
    dateStart: string
    dateEnd: string
    location: string
    experience: string[]
  }[]
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <div>
      <h2 className='mb-6'>
        Experience
      </h2>
      {data.map(experience => {
        return (
          <>
            <ExperienceNode dataSet={experience} />
            <NodeLine />
          </>
        )
      })}
    </div>


  )
}

export default Experience