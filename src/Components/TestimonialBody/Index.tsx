
import { testimonials } from '../../Utils/content'
import MainContainer from '../MainContainer/Index'
import Testimonials from '../Testimonials/Index'

type TestimonialBodyProps = {}

const TestimonialBody = (props: TestimonialBodyProps) => {
  return (
    <MainContainer>
      <Testimonials data={testimonials} />
    </MainContainer>
  )
}

export default TestimonialBody