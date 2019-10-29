const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const dagurTemplate = path.resolve(`src/templates/dagur.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: frontmatter___dagsetning, order: ASC }
              filter: { fileAbsolutePath: { regex: "/content/dagar/" } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    dagsetning
                    vidjo {
                      vidjotitill
                      vidjourl
                    }
                    eventar
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log("error")
          reject(result.errors)
        }
        // Create pages for each day.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.title
          createPage({
            path,
            component: dagurTemplate,
            context: {
              frontmatter: node.frontmatter,
              slug: node.frontmatter.dagsetning,
            },
          })
        })
      })
    )
  })
}
