const path = require("path")
const slugify = require("slugify")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const dagurTemplate = path.resolve(`src/templates/Dagur/dagur.js`)
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
          let path = node.frontmatter.dagsetning.replace("/", "-")
          path += "-desember"
          createPage({
            path,
            component: dagurTemplate,
            context: {
              frontmatter: node.frontmatter,
              dagsetning: node.frontmatter.dagsetning,
            },
          })
        })
      })
    )
  })
}
