import { TypeAnimation } from 'react-type-animation';
import MainContainer from '../MainContainer/Index';

type HeaderProps = {}

const Header = ({ }: HeaderProps) => {
  return (
    <MainContainer>
      <div className='w-full fixed bg-sp-background-300'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Logan The Front-End Developer',
            1500,
            'Logan The Front-End Engineer',
            1500,
            'Logan The Cloud Engineer',
            1500,
            'Logan The Web Developer',
            1500,
            'Logan The Full-Stack Engineer',
            1500,
            'Logan The Full-Stack Developer',
            1500,
            'Logan The Rock Climber',
            1500,
            'Logan The Cat Enjoyer',
            1500,
            'Logan The Bald Guy',
            1500,
            'Logan The Cook',
            1500,
            // 'Logan The ',
            // 1500,
            // 'Logan The ',
            // 1500,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '3rem', lineHeight: '3.4rem', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </MainContainer>

  )
}

export default Header