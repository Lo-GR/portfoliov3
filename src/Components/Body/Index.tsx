import React from 'react'
import MainContainer from '../MainContainer/Index'
import About from '../About/Index'

type BodyProps = {}

const Body = ({ }: BodyProps) => {
  return (
    <MainContainer>
      <div className='w-full'>
        <About />
      </div>
    </MainContainer>

  )
}

export default Body