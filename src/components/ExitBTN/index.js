import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({
  click,
  tight,
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
    >
      <Line platform={platform} relativeToVideo={relativeToVideo}></Line>
      <Line platform={platform} relativeToVideo={relativeToVideo} second></Line>
    </Container>
  )
}

const mapStateToProps = state => ({
  videoFullscreen: state.reducer.videoFullscreen,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(ExitBTN)
