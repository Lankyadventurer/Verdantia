import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Page from '../templates/Page'

export const WikiPage = props => (
  <Page title='Wiki'>
    <h1>Wiki</h1>

    <ul>
      <StaticQuery
        query={graphql`
          query Wiki {
            wikiPages: allSitePage(filter: { path: { regex: "^/wiki/" } }) {
              edges {
                node {
                  id
                  path
                }
              }
            }
          }
        `}
      >
        {({ wikiPages }) => {
          const { edges } = wikiPages

          return edges.map(({ node }) => (
            <li id={node.id}>
              <Link to={node.path}>{node.path}</Link>
            </li>
          ))
        }}
      </StaticQuery>
    </ul>
  </Page>
)

export default WikiPage
