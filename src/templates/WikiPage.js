import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

/**
 * @param {object} props
 * @param {object} props.data
 * @param {object} props.data.wiki
 * @param {string} props.data.wiki.html
 */
export const WikiPage = props => {
  const {
    data: { wiki }
  } = props

  const title = `Wiki`

  return (
    <Layout>
      <Helmet title={title} />

      <h1>{title}</h1>

      <section dangerouslySetInnerHTML={{ __html: wiki.html }} />
    </Layout>
  )
}

export default WikiPage

export const query = graphql`
  query WikiPageQuery($id: String!) {
    wiki: markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
