import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({
  click,
  tight,
  small,
  relativeToVideo,
  videoFullscreen,
  platform,
}) => {
  return (
    <Container
      relativeToVideo={relativeToVideo}
      videoFullscreen={videoFullscreen}
      tight={tight}
      onClick={() => click()}
      small
    >
      <Line
        small={small}
        platform={platform}
        relativeToVideo={relativeToVideo}
      ></Line>
      <Line
        small={small}
        platform={platform}
        relativeToVideo={relativeToVideo}
        second
      ></Line>
    </Container>
  )
}

const mapStateToProps = state => ({
  videoFullscreen: state.reducer.videoFullscreen,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(ExitBTN)
