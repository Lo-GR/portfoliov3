
import Experience from '../Experience/Index'
import { experience } from '../../Utils/content'
import MainContainer from '../MainContainer/Index'

type ExperienceBodyProps = {}

const ExperienceBody = (props: ExperienceBodyProps) => {
  return (
    <div className='bg-sp-background-300 w-full py-2'>
      <MainContainer>
        <div className='w-full flex flex-col gap-20 py-20'>
          <Experience data={experience} />
        </div>
      </MainContainer>
    </div>

  )
}

export default ExperienceBody