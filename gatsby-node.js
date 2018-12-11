const { resolve } = require('path')

const { filenameToURL, normalizeURL } = require('./src/shared/url')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const wikiPage = resolve(__dirname, './src/templates/WikiPage.js')
  const wikiCategoryPage = resolve(
    __dirname,
    './src/templates/WikiCategoryPage.js'
  )

  return graphql(`
    query CreatePagesQuery {
      wikis: allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              category
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const uniqueCategories = new Set()

    const {
      wikis: { edges }
    } = data

    // Create a page for each Wiki item
    edges.forEach(({ node }) => {
      const filename = filenameToURL(node.fileAbsolutePath, '.md')
      const wikiPath = `/wiki/${filename}`

      uniqueCategories.add(node.frontmatter.category)

      createPage({
        path: wikiPath,
        component: wikiPage,
        context: {
          id: node.id
        }
      })
    })

    // Create a page for each Wiki item category
    uniqueCategories.forEach(category => {
      const categoryPath = `/category/${normalizeURL(category)}`

      createPage({
        path: categoryPath,
        component: wikiCategoryPage,
        context: {
          category
        }
      })
    })
  })
}
