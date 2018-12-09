const { resolve, basename } = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const wikiTemplate = resolve(__dirname, './src/templates/WikiPage.js')

  return graphql(`
    query CreatePagesQuery {
      wikis: allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const {
      wikis: { edges }
    } = data

    edges.forEach(({ node }) => {
      const filename = basename(node.fileAbsolutePath, '.md')
        .trim()
        .replace(/ /g, '-')
        .toLowerCase()
      const wikiPath = `/wiki/${filename}`

      createPage({
        path: wikiPath,
        component: wikiTemplate,
        context: {
          id: node.id
        }
      })
    })
  })
}
