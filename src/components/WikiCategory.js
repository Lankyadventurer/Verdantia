import React from 'react'
import { Link } from 'gatsby'

import { filenameToURL } from '../shared/url'

/**
 * Converts the MD file location to the site URL
 *
 * @param {string} wikiMDPath
 * @returns {string}
 */
export const fileToWiki = wikiMDPath => {
  const filename = filenameToURL(wikiMDPath, '.md')

  return `/wiki/${filename}`
}

/**
 * @param {object} props
 * @param {string} props.category
 * @param {Array<{node: { id: string, fileAbsolutePath: string, frontmatter: {title: string} }}>} props.edges
 */
export const WikiCategory = props => {
  const { edges } = props

  return (
    <ul>
      {edges.map(({ node }) => {
        const wikiURL = fileToWiki(node.fileAbsolutePath)

        return (
          <li key={node.id}>
            <Link to={wikiURL}>{node.frontmatter.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default WikiCategory
