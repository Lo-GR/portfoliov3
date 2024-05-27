import MainContainer from '../MainContainer/Index'
import About from '../About/Index'
import BarGraph from '../BarGraph/Index'
import { skillsData, conceptsData } from '../../Utils/content'



type BodyProps = {}

const Body = ({ }: BodyProps) => {
  return (
    <MainContainer>
      <div className='w-full flex flex-col gap-20'>
        <About />
        <div className='flex gap-6 flex-col lg:flex-row'>
          <BarGraph tableName={skillsData.tableName} data={skillsData.dataSet} />
          <BarGraph tableName={conceptsData.tableName} data={conceptsData.dataSet} />
        </div>
        {/* <BarGraph data={skillsData} /> */}
      </div>
    </MainContainer>

  )
}

export default Body