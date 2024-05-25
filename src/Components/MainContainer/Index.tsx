import React from 'react'

type MainContainerProps = {
  children: React.ReactNode
  classN?: string
}

const MainContainer = ({ children, classN = "" }: MainContainerProps) => {
  return (
    <div className={`w-11/12  sm:w-[600px] lg:w-[900px] xl:w-[1200px] mx-auto ${classN}`}>
      {children}
    </div>
  )
}

export default MainContainer