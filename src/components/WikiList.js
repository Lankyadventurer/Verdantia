import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import WikiCategory from './WikiCategory'

const WIKI_LIST_QUERY = graphql`
  query WIKI_LIST_QUERY {
    wikiList: allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
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

const CategoryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));

  .category {
    h2 {
      margin-top: 0;
    }
  }
`

export const WikiList = props => {
  return (
    <CategoryGrid>
      <StaticQuery query={WIKI_LIST_QUERY}>
        {({ wikiList }) => {
          const { group } = wikiList

          return group.map(category => (
            <section className='category' key={category.category}>
              <h2>
                {category.category} ({category.totalCount})
              </h2>
              <WikiCategory {...category} />
            </section>
          ))
        }}
      </StaticQuery>
    </CategoryGrid>
  )
}

export default WikiList
