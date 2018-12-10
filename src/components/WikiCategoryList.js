import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import { normalizeURL } from '../shared/url'

const WIKI_CATEGORY_LIST_QUERY = graphql`
  query WIKI_CATEGORY_LIST_QUERY {
    wikiCategories: allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
      group(field: frontmatter___category) {
        category: fieldValue
        totalCount
      }
    }
  }
`

export const WikiCategoryList = props => {
  return (
    <ul>
      <StaticQuery query={WIKI_CATEGORY_LIST_QUERY}>
        {({ wikiCategories }) => {
          const { group } = wikiCategories

          return group.map(({ category, totalCount }) => {
            const categoryPath = `/category/${normalizeURL(category)}`

            return (
              <li key={category}>
                <Link to={categoryPath}>
                  {category} ({totalCount})
                </Link>
              </li>
            )
          })
        }}
      </StaticQuery>
    </ul>
  )
}

export default WikiCategoryList
