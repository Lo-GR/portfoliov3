
import Body from '../../Components/Body/Index';
import ExperienceBody from '../../Components/ExperienceBody/Index';
import Header from '../../Components/Header/Index';

type HomeProps = {}

export default function Home({ }: HomeProps) {
  return (
    <div className='flex flex-col w-full gap-20 mt-10'>
      <Header />
      <Body />
      <ExperienceBody />
    </div>
  )
}