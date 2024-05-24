import { TypeAnimation } from 'react-type-animation';

type HeaderProps = {}

const Header = ({ }: HeaderProps) => {
  return (
    <div className='w-full top-0 left-0 w-360 h-800 fixed'>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Software Developer',
          1500, // wait 1s before replacing "Mice" with "Hamsters"
          'Software Engineer',
          1500,
          'Software Coder',
          1500,
          'Software Enjoyer',
          1500,
          'Rock Climber',
          1500,
          'Video Gamer',
          1500,
          'Cat Enjoyer',
          1500,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  )
}

export default Header