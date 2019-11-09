import React from "react"
import { Container, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  triggerDagurPopup,
  triggerEventPopup,
} from "../../../../state/action"

const dispatches = dispatch => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(triggerDagurPopup("closed"))
  dispatch(triggerEventPopup("closed"))
}

const getHomeTitle = dispatch => (
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
    render={data => (
      <Text onClick={() => dispatches(dispatch)}>
        {data.site.siteMetadata.nafn}
      </Text>
    )}
  ></StaticQuery>
)

const HomeBTN = ({ dispatch }) => {
  return <Container to={"/"}>{getHomeTitle(dispatch)}</Container>
}

export default connect()(HomeBTN)
