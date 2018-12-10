import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import '@reach/skip-nav/styles.css'
import 'typeface-croissant-one'
import 'typeface-montserrat'

const theme = {
  displayFont: `'Croissant One', cursive`,
  baseFont: `'Montserrat', Arial, Helvetica, sans-serif`,
  primaryColor: '#118a16',
  accentColor: '#ce7919',
  backgroundColor: '#ffffff',
  black: '#555',
  white: '#fefefe',
  offWhite: '#eee'
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      /* outline: 0.1rem dotted ${props => props.theme.black}; */
    }

    &::selection {
      background-color: ${props => props.theme.black};
      color: ${props => props.theme.white};
    }
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.baseFont};
    line-height: 2;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.displayFont};
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.83em;
  }

  h6 {
    font-size: 0.67em;
  }

  a {
    color: ${props => props.theme.primaryColor};

    &:active {
      color: ${props => props.theme.accentColor};
    }
  }

  [data-reach-skip-link] {
    color: cornflowerblue;
    text-decoration: none;

    &:focus {
      outline-color: currentColor;
    }
  }
`

export const Theme = props => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Theme
