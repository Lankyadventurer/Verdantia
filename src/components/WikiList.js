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
  grid-template-columns: 1fr;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const WikiList = props => {
  return (
    <CategoryGrid>
      <StaticQuery query={WIKI_LIST_QUERY}>
        {({ wikiList }) => {
          const { group } = wikiList

          return group.map(category => (
            <section key={category.category}>
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
