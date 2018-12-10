import React from 'react'

import WikiList from '../components/WikiList'
import Page from '../templates/Page'

export const WikiPage = props => (
  <Page title='Wiki'>
    <h1>Wiki</h1>

    <WikiList />
  </Page>
)

export default WikiPage
