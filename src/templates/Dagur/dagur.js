import React from "react"
import { graphql } from "gatsby"
import { Container } from "./Styled"
import Events from "./components/Events"
import Burger from "../../components/Burger"
import Title from "./components/Title"
import EventPopup from "./components/EventPopup"

const Dagur = ({ data, pageContext }) => {
  return (
    <Container>
      <Burger></Burger>
      <Title></Title>
      <Events
        events={data.allMarkdownRemark.edges}
        title={pageContext.frontmatter.title}
      ></Events>
      <EventPopup></EventPopup>
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
            lysing
          }
        }
      }
    }
  }
`

export default Dagur
