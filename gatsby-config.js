const { resolve } = require('path')

module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wiki',
        path: resolve(__dirname, './wiki')
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000
            }
          }
        ]
      }
    },
    'gatsby-plugin-netlify' // Must be placed last in the list
  ]
}
