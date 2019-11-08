import React from "react"
import { Container, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"
import { triggerDagurPopup } from "../../../../state/action"

const GetTitle = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            nafn
          }
        }
      }
    `}
    render={data => <Text>{data.site.siteMetadata.nafn}</Text>}
  ></StaticQuery>
)

const Title = ({ dispatch }) => {
  return (
    <Container onClick={() => dispatch(triggerDagurPopup("close"))} to={"/"}>
      {GetTitle()}
    </Container>
  )
}

export default connect()(Title)
