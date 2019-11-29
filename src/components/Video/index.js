import React from "react"
import { Container, Player, Source } from "./Styled"
import { connect } from "react-redux"
import { triggerVideoFullscreen } from "../../state/action"
import ExitBTN from "../ExitBTN"
import loadGIF from "../../../static/myndir/load.gif"

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
  }
  componentDidUpdate() {
    if (this.props.videoFullscreen) {
      this.state.video.play()
    } else {
      this.state.video.pause()
    }
  }
  render() {
    const {
      vidjo,
      platform,
      videoFullscreen,
      dispatch,
      deviceDetails,
    } = this.props
    return (
      <Container platform={platform} open={videoFullscreen ? "100%" : "0%"}>
        <ExitBTN
          tight
          relativeToVideo
          click={() => dispatch(triggerVideoFullscreen())}
        ></ExitBTN>
        <Player
          platform={platform}
          poster={loadGIF}
          id="video-player"
          title={vidjo.vidjotitill}
          frameBorder="0"
          playsInline
          open={videoFullscreen ? "100%" : "0%"}
        >
          <Source type="video/webm" src={vidjo.vidjourl.publicURL}></Source>
        </Player>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  videoFullscreen: state.reducer.videoFullscreen,
  platform: state.reducer.platform,
})
export default connect(mapStateToProps)(Video)
