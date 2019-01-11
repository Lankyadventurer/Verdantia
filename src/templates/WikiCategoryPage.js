import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import WikiCategory from '../components/WikiCategory'

/**
 *
 * @param {object} props
 * @param {object} props.wikiCategory
 * @param {Array<object>} props.wikiCategory.group
 */
export const WikiCategoryPage = props => {
  const {
    data: {
      wikiCategory: { group }
    }
  } = props

  const { category, totalCount, edges } = group[0]

  return (
    <React.Fragment>
      <Helmet title={category} />

      <h1>
        {category} ({totalCount})
      </h1>

      <WikiCategory category={category} edges={edges} />
    </React.Fragment>
  )
}

export default WikiCategoryPage

export const query = graphql`
  query WIKI_CATEGORY_PAGE_QUERY($category: String!) {
    wikiCategory: allMarkdownRemark(
      sort: { fields: [frontmatter___title] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      group(field: frontmatter___category) {
        category: fieldValue
        totalCount
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`
