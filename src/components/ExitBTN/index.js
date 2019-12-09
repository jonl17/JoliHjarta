import React from "react"
import { Container, Line, LinkContainer } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({
  click,
  tight,
  relativeToVideo,
  videoFullscreen,
  platform,
  type,
  slug,
  burgerPos,
}) => {
  return type !== "link" ? (
    <Container
      relativetovideo={relativeToVideo}
      videofullscreen={videoFullscreen}
      tight={tight ? "true" : "false"}
      onClick={() => click()}
      burgerPos={burgerPos ? "true" : "false"}
    >
      <Line platform={platform} relativetovideo={relativeToVideo}></Line>
      <Line platform={platform} relativetovideo={relativeToVideo} second></Line>
    </Container>
  ) : (
    <LinkContainer
      onMouseOver={() => console.log("OEOEO")}
      tight={tight ? "true" : "false"}
      to={slug}
    >
      <Line platform={platform}></Line>
      <Line platform={platform} second></Line>
    </LinkContainer>
  )
}

const mapStateToProps = state => ({
  videoFullscreen: state.reducer.videoFullscreen,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(ExitBTN)
