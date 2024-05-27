
import Bar from './Bar'

type BarGraphProps = {
  data: {
    name: string
    value: number
  }[]
}

const BarGraph = ({ data }: BarGraphProps) => {
  return (
    <div className='w-full flex flex-col'>
      <h2 className='mb-6'>Skills</h2>
      {data.map(d => {
        return <Bar dataPoint={d} />
      })}
    </div>
  )
}

export default BarGraph