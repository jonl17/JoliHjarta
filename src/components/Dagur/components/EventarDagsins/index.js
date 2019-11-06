import React from "react"
import { Container, Title, BTN, EventText, Anchor, Klukkan } from "./Styled"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import { generateSlugFromDate } from "../../../../methods"

const GetAllEvents = dagsetning => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/events/" } }) {
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
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) =>
        item.node.frontmatter.hvenaer === dagsetning ? (
          <BTN key={index}>
            <Anchor
              to={"/" + generateSlugFromDate(item.node.frontmatter.hvenaer)}
            >
              <EventText>
                <Klukkan>{item.node.frontmatter.klukkan}</Klukkan>
                {" " + item.node.frontmatter.title}
              </EventText>
            </Anchor>
          </BTN>
        ) : (
          <></>
        )
      )
    }
  ></StaticQuery>
)

const EventarDagsins = ({ dagsetning }) => {
  return (
    <>
      <Title>viðburðir dagsins</Title>
      <Container>{GetAllEvents(dagsetning)}</Container>
    </>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(EventarDagsins)
