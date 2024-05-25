import { TypeAnimation } from 'react-type-animation';
import MainContainer from '../MainContainer/Index';
import { headerTitles } from '../../Utils/content';

type HeaderProps = {}

const Header = ({ }: HeaderProps) => {
  return (
    <MainContainer>
      <header className='w-10/12 mx-auto bg-sp-background-300 flex justify-center items-center py-2 rounded-lg lg:w-full'>
        <TypeAnimation
          sequence={headerTitles}
          wrapper="h1"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </header>
    </MainContainer>

  )
}

export default Header