import React from "react"
import { Container, Text, NavText } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  triggerDagurPopup,
  triggerEventPopup,
  triggerCalenderWindow,
} from "../../../../src/state/action"

const dispatches = dispatch => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(triggerDagurPopup("closed"))
  dispatch(triggerEventPopup("closed"))
  dispatch(triggerCalenderWindow())
}

const getHomeTitle = (dispatch, platform, nav) => (
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
    render={data =>
      !nav ? (
        <Text to={"/"} platform={platform} onClick={() => dispatches(dispatch)}>
          {data.site.siteMetadata.nafn}
        </Text>
      ) : (
        <NavText
          to={"/"}
          platform={platform}
          onClick={() => dispatches(dispatch)}
        >
          {" "}
          {data.site.siteMetadata.nafn}
        </NavText>
      )
    }
  ></StaticQuery>
)

const HomeBTN = ({ dispatch, platform, nav }) => {
  return (
    <Container platform={platform}>
      {getHomeTitle(dispatch, platform, nav)}
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(HomeBTN)
