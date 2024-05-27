import MainContainer from '../MainContainer/Index'
import About from '../About/Index'
import BarGraph from '../BarGraph/Index'
import { skillsData } from '../../Utils/content'



type BodyProps = {}

const Body = ({ }: BodyProps) => {
  return (
    <MainContainer>
      <div className='w-full flex flex-col gap-20'>
        <About />
        <BarGraph data={skillsData} />
      </div>
    </MainContainer>

  )
}

export default Body