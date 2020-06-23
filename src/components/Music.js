import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'

const MusicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  z-index: 10;
`

const Music = () => {
  return (
    <MusicWrapper>
      <h1
        style={{
          fontSize: '2.5rem',
          color: `${theme.colors.background}`,
          opacity: 0.5,
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        Coming soon...
      </h1>
    </MusicWrapper>
  )
}

export default Music
