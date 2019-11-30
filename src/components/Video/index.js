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
  /*
  componentDidMount() {
    let video = document.getElementById("video-player")
    this.setState({
      video: video,
    })
  }
  componentDidUpdate() {
    document
      .getElementById("video-source")
      .setAttribute("src", this.props.vidjo.vidjourl)
    if (this.props.videoFullscreen) {
      this.state.video.play()
    } else {
      this.state.video.pause()
    }
  } */
  render() {
    const { vidjo, platform, videoFullscreen, dispatch } = this.props
    return (
      <Container platform={platform} open={videoFullscreen ? "100%" : "0%"}>
        <ExitBTN
          small
          relativeToVideo
          click={() => dispatch(triggerVideoFullscreen())}
        ></ExitBTN>
        <Player
          src={vidjo.vidjourl}
          height={videoFullscreen ? "100%" : "0%"}
          width={"100%"}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></Player>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  videoFullscreen: state.reducer.videoFullscreen,
})
export default connect(mapStateToProps)(Video)
