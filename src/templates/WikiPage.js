import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const WikiEntry = styled.article`
  .description {
    code {
      background-color: ${props => props.theme.offWhite};
      padding: 0 0.75ch;
    }
  }
`

/**
 * @param {object} props
 * @param {object} props.data
 * @param {object} props.data.wiki
 * @param {object} props.data.wiki.frontmatter
 * @param {string} props.data.wiki.frontmatter.category
 * @param {string} props.data.wiki.frontmatter.title
 * @param {string} props.data.wiki.html
 */
export const WikiPage = props => {
  const {
    data: { wiki }
  } = props

  return (
    <Layout>
      <Helmet title={wiki.frontmatter.title} />

      <WikiEntry>
        <h1>{wiki.frontmatter.title}</h1>

        <p>Category: {wiki.frontmatter.category}</p>

        <section
          className='description'
          dangerouslySetInnerHTML={{ __html: wiki.html }}
        />
      </WikiEntry>
    </Layout>
  )
}

export default WikiPage

export const query = graphql`
  query WikiPageQuery($id: String!) {
    wiki: markdownRemark(id: { eq: $id }) {
      frontmatter {
        category
        title
      }
      html
    }
  }
`
