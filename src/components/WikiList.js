import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import WikiCategory from './WikiCategory'

const WIKI_LIST_QUERY = graphql`
  query WIKI_LIST_QUERY {
    wikiList: allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
      group(field: frontmatter___category) {
        category: fieldValue
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

export const WikiList = props => {
  return (
    <ul>
      <StaticQuery query={WIKI_LIST_QUERY}>
        {({ wikiList }) => {
          const { group } = wikiList

          return group.map(category => (
            <WikiCategory key={category.category} {...category} />
          ))
        }}
      </StaticQuery>
    </ul>
  )
}

export default WikiList
