import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'
import Theme from './Theme'

const Page = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5em;
`

const Main = styled.main`
  margin: 2em auto 3em auto;
  max-width: 950px;
  min-height: 75vh;
`

export class Layout extends React.Component {
  state = { jsEnabled: false }

  componentDidMount () {
    // Only runs when JS is not disabled on the browser
    this.setState({ jsEnabled: true })
  }

  render () {
    const {
      props: { children },
      state: { jsEnabled }
    } = this

    return (
      <Theme>
        <Helmet defaultTitle='Verdantia' titleTemplate='%s | Verdantia' />

        <Page className={jsEnabled ? 'js' : ''}>
          <SkipNavLink />
          <Header />
          <SkipNavContent />
          <Main>{children}</Main>
          <Footer />
        </Page>
      </Theme>
    )
  }
}

export default Layout
