import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  font-size: 1.5em;

  a {
    display: inline-block;
    padding: 0 1ch;
    text-decoration: none;
  }
`

export const Nav = props => (
  <NavStyles>
    <Link to='/'>Home</Link>
  </NavStyles>
)

export default Nav
