import React from "react"
import { graphql } from "gatsby"
import { Container } from "./Styled"
import Events from "./components/Events"

const Dagur = ({ data, pageContext }) => {
  return (
    <Container>
      <Events
        events={data.allMarkdownRemark.edges}
        title={pageContext.frontmatter.title}
      ></Events>
    </Container>
  )
}

/* Query for the events for the day */
export const query = graphql`
  query($slug: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: { hvenaer: { eq: $slug } }
        fileAbsolutePath: { regex: "/events/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            hvenaer
            klukkan
          }
        }
      }
    }
  }
`

export default Dagur
