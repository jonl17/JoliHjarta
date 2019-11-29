import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({ click, tight, relativeToVideo, videoFullscreen }) => {
  return (
    <Container
      relativeToVideo={relativeToVideo}
      videoFullscreen={videoFullscreen}
      tight={tight}
      onClick={() => click()}
    >
      <Line relativeToVideo={relativeToVideo}></Line>
      <Line relativeToVideo={relativeToVideo} second></Line>
    </Container>
  )
}

const mapStateToProps = state => ({
  videoFullscreen: state.reducer.videoFullscreen,
})

export default connect(mapStateToProps)(ExitBTN)
