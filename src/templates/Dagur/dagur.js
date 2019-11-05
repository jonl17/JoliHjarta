import React from "react"
import { graphql } from "gatsby"
import { Container } from "./Styled"
import Events from "./components/Events"
import Burger from "../../components/Burger"
import Title from "./components/Title"
import EventPopup from "./components/EventPopup"
import Calender from "./components/Calender"

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
      <Calender></Calender>
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
            hvar
          }
        }
      }
    }
  }
`

export default Dagur
