import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

type NodeLineProps = {}

const NodeLine = ({ }: NodeLineProps) => {
  return (
    <div className='h-40 w-full flex flex-col items-center'>
      <RadioButtonCheckedIcon />
      <div className='w-1 h-5/6 bg-sp-text-300' />
      <RadioButtonCheckedIcon />
    </div>
  )
}

export default NodeLine