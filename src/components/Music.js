import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'

const MusicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  z-index: 10;
`

const ComingSoon = styled.h1`
  font-size: 2.5rem;
  font-family: ${theme.font.primary};
  text-align: center;
  z-index: 10;
  color: ${theme.colors.primaryLight};
  @media (min-width: ${theme.breakpoints.mobile}px) {
    font-size: 3.5rem;
    margin-top: 25rem;
    opacity: 0.6;
    color: ${theme.colors.background};
  }
`

const Music = () => {
  return (
    <MusicWrapper>
      <ComingSoon
        style={{
          fontWeight: `${theme.fontWeight.bold}`,
        }}
      >
        Coming soon...
      </ComingSoon>
    </MusicWrapper>
  )
}

export default Music
