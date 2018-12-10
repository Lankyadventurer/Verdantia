import React from 'react'

import WikiList from '../components/WikiList'
import Page from '../templates/Page'

export const HomePage = props => (
  <Page>
    <h1>Welcome!</h1>

    <WikiList />
  </Page>
)

export default HomePage
