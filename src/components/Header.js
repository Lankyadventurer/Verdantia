import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav'

const HeaderStyles = styled.header`
  margin: 0.75em 0;
`

const HeaderTitle = styled.section`
  font-family: ${props => props.theme.displayFont};
  font-size: 2em;
  margin-bottom: 0.25em;

  a {
    display: inline-block;
    text-decoration: none;
  }
`

export const Header = props => (
  <HeaderStyles>
    <HeaderTitle>
      <Link to='/'>Verdantia</Link>
    </HeaderTitle>

    <Nav />
  </HeaderStyles>
)

export default Header
