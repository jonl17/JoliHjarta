import React from "react"
import { Container, Player } from "./Styled"
import { connect } from "react-redux"
import { triggerVideoFullscreen } from "../../state/action"
import ExitBTN from "../ExitBTN"
import Vimeo from "@vimeo/player"

class Video extends React.Component {
  componentDidUpdate() {
    document
      .getElementById("video-player")
      .setAttribute("src", this.props.vidjo.vidjourl + "?api=1")
  }
  dispatches(dispatch) {
    dispatch(triggerVideoFullscreen())
    var iframe = document.getElementById("video-player")
    var player = new Vimeo(iframe)
    player.pause()
  }
  render() {
    const { vidjo, platform, videoFullscreen, dispatch } = this.props
    return (
      <>
        <Container platform={platform} open={videoFullscreen ? "100%" : "0%"}>
          <ExitBTN
            small
            relativeToVideo
            click={() => this.dispatches(dispatch)}
          ></ExitBTN>
          <Player
            id="video-player"
            src={vidjo.vidjourl + "?api=1"}
            height={videoFullscreen ? "100%" : "0%"}
            width="100%"
            frameBorder="0"
            allow="fullscreen"
            allowfullscreen
          ></Player>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  videoFullscreen: state.reducer.videoFullscreen,
})
export default connect(mapStateToProps)(Video)
