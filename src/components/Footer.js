import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: right;
`

const Footer = props => (
  <StyledFooter>
    <p>
      Built by{' '}
      <a
        href='https://www.lion-byte.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Mark Hernandez
      </a>
    </p>
  </StyledFooter>
)

export default Footer
