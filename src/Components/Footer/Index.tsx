import React from 'react'
import MainContainer from '../MainContainer/Index'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Email, GitHub } from '@mui/icons-material';

type FooterProps = {
  footerContent: {
    links: {
      github: string
      linkedin: string
      email: string
    }
    copyright: string
  }
}

const Footer = ({ footerContent }: FooterProps) => {
  const { links, copyright } = footerContent;

  return (
    <div className='bg-sp-background-300 w-full'>
      <MainContainer>
        <div className='py-12'>
          <div className='flex flex-row w-full justify-evenly pb-12'>
            <a href={links.linkedin} className="rounded-full p-1 flex content-center" target='_blank'>
              <LinkedInIcon fontSize='large' sx={{ color: "#33332D" }} />
            </a>
            <a href={links.github} className=" rounded-full p-1 flex content-center" target='_blank'>
              <GitHub fontSize='large' sx={{ color: "#33332D" }} />
            </a>
            <a href={`mailto: ${links.email}`} className="rounded-full p-1 flex content-center" target='_blank' >
              <Email fontSize='large' sx={{ color: "#33332D" }} />
            </a>
          </div>
          <div className='text-center w-full'>
            <p>{copyright}</p>
          </div>
        </div>

      </MainContainer>
    </div>
  )
}

export default Footer