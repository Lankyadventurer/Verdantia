import React from 'react'
import { Link } from 'gatsby'
import { basename } from 'path'

/**
 * Converts the MD file location to the site URL
 *
 * @param {string} wikiMDPath
 * @returns {string}
 */
export const fileToWiki = wikiMDPath => {
  const filename = basename(wikiMDPath, '.md')
    .trim()
    .replace(/ /g, '-')
    .toLowerCase()

  return `/wiki/${filename}`
}

/**
 * @param {object} props
 * @param {string} props.category
 * @param {Array<{node: { id: string, fileAbsolutePath: string, frontmatter: {title: string} }}>} props.edges
 */
export const WikiCategory = props => {
  const { category, edges } = props

  return (
    <section>
      <h2>{category}</h2>

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
    </section>
  )
}

export default WikiCategory
