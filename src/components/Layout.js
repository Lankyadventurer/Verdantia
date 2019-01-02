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

export const Layout = props => (
  <Theme>
    <Helmet defaultTitle='Verdantia' titleTemplate='%s | Verdantia' />

    <Page>
      <SkipNavLink />
      <Header />
      <SkipNavContent />
      <Main>{props.children}</Main>
      <Footer />
    </Page>
  </Theme>
)

export default Layout
