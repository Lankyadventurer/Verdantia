import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

/**
 * @param {object} props
 * @param {any} props.children
 * @param {string} [props.title]
 */
export const Page = props => {
  const { children, title } = props

  return (
    <Layout>
      <Helmet title={title} />

      {children}
    </Layout>
  )
}

export default Page
