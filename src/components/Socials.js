import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'

const SocialLogo = styled.img`
  z-index: 10;
  width: 2rem;
  padding: 0 0.5rem;

  filter: brightness(0) saturate(100%) invert(77%) sepia(96%) saturate(654%)
    hue-rotate(318deg) brightness(106%) contrast(101%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(74%) sepia(21%) saturate(6744%)
      hue-rotate(332deg) brightness(103%) contrast(101%);
  }
`

const SocialsList = styled.ul`
  display: flex;
  margin: 1rem;
  &.headerSocials {
    @media (min-width: ${theme.breakpoints.mobile}px) {
      order: -1;
      margin: 1rem;
    }
  }
`

const iconPath = process.env.PUBLIC_URL + '/assets/'

const socialLogos = [
  {
    src: `${iconPath}icons/soundcloud.svg`,
    alt: 'Soundcloud',
    href: 'https://soundcloud.com/equiil',
  },
  {
    src: `${iconPath}icons/facebook.svg`,
    alt: 'Facebook',
    href: 'https://www.facebook.com/equiil',
  },
  {
    src: `${iconPath}icons/bandcamp.svg`,
    alt: 'Bandcamp',
    href: 'https://equiil.bandcamp.com/',
  },
  // {
  //   src: `${iconPath}icons/spotify.svg`,
  //   alt: 'Spotify',
  //   href: '',
  // },
  // {
  //   src: 'applemusic.svg',
  //   alt: 'Apple Music',
  //   href: '',
  // },
]
const Socials = (props) => {
  return (
    <SocialsList className={props.className}>
      {socialLogos.map((logo, i) => (
        <li key={i}>
          <a href={logo.href} target='_blank' rel='noopener noreferrer'>
            <SocialLogo src={logo.src} />
          </a>
        </li>
      ))}
    </SocialsList>
  )
}

export default Socials
