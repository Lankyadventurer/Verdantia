import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './Header'
import Theme from './Theme'

const Page = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2ch;
`

const Main = styled.main`
  max-width: 850px;
  margin: 2em auto 3em auto;
`

export const Layout = props => (
  <Theme>
    <Helmet defaultTitle='Verdantia' titleTemplate='%s | Verdantia' />
    <SkipNavLink />

    <Page>
      <Header />
      <SkipNavContent />
      <Main>{props.children}</Main>
    </Page>
  </Theme>
)

export default Layout
