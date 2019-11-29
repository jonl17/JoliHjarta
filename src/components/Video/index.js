import React from "react"
import { Container, Player, Source } from "./Styled"
import { connect } from "react-redux"
import { triggerVideoFullscreen } from "../../state/action"
import ExitBTN from "../ExitBTN"

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: undefined,
    }
  }
  componentDidMount() {
    let video = document.getElementById("video-player")
    this.setState({
      video: video,
    })
    console.log("popup openened")
  }
  componentDidUpdate() {
    if (this.props.videoFullscreen) {
      this.state.video.play()
    } else {
      this.state.video.pause()
    }
  }
  render() {
    const { vidjo, platform, videoFullscreen, dispatch } = this.props
    return (
      <Container platform={platform} open={videoFullscreen ? "100%" : "0%"}>
        <ExitBTN
          tight
          relativeToVideo
          click={() => dispatch(triggerVideoFullscreen())}
        ></ExitBTN>
        <Player id="video-player" title={vidjo.vidjotitill} frameBorder="0">
          <Source type="video/webm" src={vidjo.vidjourl.publicURL}></Source>
        </Player>
        <p style={{ color: "white" }}>Hleður...</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  videoFullscreen: state.reducer.videoFullscreen,
})
export default connect(mapStateToProps)(Video)
