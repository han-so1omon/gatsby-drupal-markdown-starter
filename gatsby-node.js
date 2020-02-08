const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `articles`) {
    const slug = `/blog/${node.internalId}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        site {
          siteMetadata {
            title
            social {
              email
              github
            }
          }
        }
        articles: allArticles {
          edges {
            node {
              id: internalId
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each recipe.
    result.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  return null
}
