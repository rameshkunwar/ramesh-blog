/*
 * You want to use each markdown file name to create the page slug. So pandas-and-bananas.md
 * will become /pandas-and-bananas/. But how do you get the file name from the MarkdownRemark node?
 * To get it, you need to traverse the “node graph” to its parent File node, as File nodes contain
 * data you need about files on disk. To do that, you’ll use the getNode() helper.
 * Add it to onCreateNode’s function parameters, and call it to get the file node:
 */

/*
 Now you’ll have to create slugs. As the logic for creating slugs from file names can get tricky, 
 the gatsby-source-filesystem plugin ships with a function for creating slugs. Let’s use that.
 */

/*
 Now you can add your new slugs directly onto the MarkdownRemark nodes. 
 This is powerful, as any data you add to nodes is available to query later with GraphQL. 
 So, it’ll be easy to get the slug when it comes time to create the pages.

To do so, you’ll use a function passed to your API implementation called createNodeField. 
This function allows you to create additional fields on nodes created by other plugins.
 Only the original creator of a node can directly modify the node—all other plugins
 (including your gatsby-node.js) must use this function to create additional fields.
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //const fileNode = getNode(node.parent)
    // const slug = createFilePath({ node, getNode, basePath: `pages` })
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    //console.log(createFilePath({ node, getNode, basePath: `content` }))
  }
}

/* creating pages - -In the same gatsby-node.js file, add the following. */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  //code for tag handling, not used yet now
  //   const tagResult = await graphql(`
  //   {
  //     allMarkdownRemark(limit: 2000) {
  //       group(field: frontmatter___tags) {
  //         fieldValue
  //       }
  //     }
  //   }
  // `)

  //   const tags = tagResult.data.allMarkdownRemark.group

  //   tags.forEach(tag => {
  //     createPage({
  //       path: `/content/posts/tags/${_.kebabCase(tag.fieldValue)}/`,
  //       component: path.resolve(`./src/templates/blog-tags.js`),
  //       context: {
  //         tag: tag.fieldValue,
  //       },
  //     })
  //   })
}
