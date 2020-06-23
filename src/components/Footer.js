import React from 'react'
import { MailingListSignup } from './MailingListSignup'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
import Socials from './Socials'

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${theme.elementSize.footer};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.background};
`

const Footer = ({ socialLogos }) => {
  return (
    <FooterWrapper>
      <MailingListSignup />
      <Socials socialLogos={socialLogos} />
    </FooterWrapper>
  )
}

export default Footer
