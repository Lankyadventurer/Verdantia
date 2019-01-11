import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { FaPen } from 'react-icons/fa'

import { filenameToURL, normalizeURL } from '../shared/url'

const WikiEntry = styled.article`
  .edit-link {
    float: right;
  }

  .description {
    clear: both;

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
 * @param {string} props.data.wiki.fileAbsolutePath
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
    <WikiEntry>
      <Helmet title={wiki.frontmatter.title} />

      <h1>{wiki.frontmatter.title}</h1>

      <a
        className='edit-link'
        href={`/admin/#/collections/wiki/entries/${filenameToURL(
          wiki.fileAbsolutePath,
          '.md'
        )}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Edit <FaPen />
      </a>

      <p>
        Category:{' '}
        <Link to={`/category/${normalizeURL(wiki.frontmatter.category)}`}>
          {wiki.frontmatter.category}
        </Link>
      </p>

      <section
        className='description'
        dangerouslySetInnerHTML={{ __html: wiki.html }}
      />
    </WikiEntry>
  )
}

export default WikiPage

export const query = graphql`
  query WIKI_PAGE_QUERY($id: String!) {
    wiki: markdownRemark(id: { eq: $id }) {
      fileAbsolutePath
      frontmatter {
        category
        title
      }
      html
    }
  }
`
