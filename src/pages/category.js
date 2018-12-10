import React from 'react'

import WikiCategoryList from '../components/WikiCategoryList'
import Page from '../templates/Page'

export const CategoryPage = props => {
  return (
    <Page title='Categories'>
      <h1>Categories</h1>

      <WikiCategoryList />
    </Page>
  )
}

export default CategoryPage
