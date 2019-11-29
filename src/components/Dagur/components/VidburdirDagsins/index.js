import React from "react"
import { Box, Title, EventBox, Event, EventName, EventInfo } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Takki from "../../../Takki"
import { generateSlugFromDate } from "../../../../methods"
import { connect } from "react-redux"

var counter = 0
const getEvents = dags => (
  (counter = 0),
  (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/events/" } }
          ) {
            nodes {
              frontmatter {
                title
                hvenaer
                hvar
                klukkan
              }
            }
          }
        }
      `}
      render={data =>
        data.allMarkdownRemark.nodes.map((item, index) =>
          item.frontmatter.hvenaer === dags && counter < 2
            ? (counter++,
              (
                <Event key={index}>
                  <EventName>{item.frontmatter.title}</EventName>
                  <EventInfo>
                    {item.frontmatter.hvar +
                      " - kl. " +
                      item.frontmatter.klukkan}
                  </EventInfo>
                </Event>
              ))
            : ""
        )
      }
    ></StaticQuery>
  )
)

const VidburdirDagsins = ({ dagsetning, platform }) => {
  return platform === `simi` ? (
    <Takki
      slug={"/" + generateSlugFromDate(dagsetning)}
      type={"link"}
      text={"Sjá alla viðburði"}
    ></Takki>
  ) : (
    <Box>
      <Title>Viðburðir dagsins</Title>
      <EventBox>{getEvents(dagsetning)}</EventBox>
      <Takki
        slug={"/" + generateSlugFromDate(dagsetning)}
        type={"link"}
        text={"Sjá alla viðburði"}
      ></Takki>
    </Box>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(VidburdirDagsins)
