import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav'

const StyledHeader = styled.header`
  margin: 0.75em 0;

  .brand {
    font-family: ${props => props.theme.displayFont};
    font-size: 2em;

    a {
      display: inline-block;
      text-decoration: none;
      margin-right: 1ch;
    }
  }
`

export const Header = props => (
  <StyledHeader>
    <section className='brand'>
      <Link to='/'>Verdantia</Link>
    </section>

    <Nav />
  </StyledHeader>
)

export default Header
