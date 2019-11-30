import React from "react"
import { Container, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  triggerDagurPopup,
  triggerEventPopup,
  triggerCalenderWindow,
} from "../../../../state/action"

const dispatches = dispatch => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(triggerDagurPopup("closed"))
  dispatch(triggerEventPopup("closed"))
  dispatch(triggerCalenderWindow())
}

const getHomeTitle = (dispatch, platform) => (
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
      <Text to={"/"} platform={platform} onClick={() => dispatches(dispatch)}>
        {data.site.siteMetadata.nafn}
      </Text>
    )}
  ></StaticQuery>
)

const HomeBTN = ({ dispatch, platform }) => {
  return (
    <Container platform={platform}>
      {getHomeTitle(dispatch, platform)}
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(HomeBTN)
