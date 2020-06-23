import React from 'react'
import logo from '../logo.svg'
import styled from 'styled-components/macro'
import Socials from './Socials'
import theme from '../styles/theme'
import { MailingListSignup } from './MailingListSignup'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderLogo = styled.img`
  width: 80vw;
  max-width: 20rem;
  padding: 0;
  z-index: 10;
  margin: 1rem;
  @media (min-width: ${theme.breakpoints.mobile}px) {
    min-width: 20rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    & > * {
      min-width: 30%;
      max-height: 10rem;
    }
  }
`

const Video = styled.video`
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    position: fixed;
  }
`

const HeaderVideo = () => {
  const iconPath = process.env.PUBLIC_URL + '/assets/'
  return (
    <>
      <Video
        autoPlay={true}
        loop={true}
        src={`${iconPath}videos/HeroVideo.mp4`}
        loading='lazy'
      ></Video>
    </>
  )
}

const Header = ({ socialLogos }) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderLogo src={logo} />
        <Socials socialLogos={socialLogos} className='headerSocials' />
        <MailingListSignup className='headerSignUpForm' />
      </TitleWrapper>
      <HeaderVideo />
    </HeaderWrapper>
  )
}

export default Header
