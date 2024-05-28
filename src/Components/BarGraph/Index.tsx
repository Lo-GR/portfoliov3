
import Bar from './Bar'

type BarGraphProps = {
  tableName: string
  data: {
    name: string
    value: number
  }[]
}

const BarGraph = ({ tableName, data }: BarGraphProps) => {
  return (
    <div className='w-full flex flex-col'>
      <h2 className='mb-6'>{tableName}</h2>
      {data.map(d => {
        return <Bar dataPoint={d} key={d.name} />
      })}
    </div>
  )
}

export default BarGraph