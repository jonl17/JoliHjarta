import React from "react"
import { Container, Player, Source } from "./Styled"
import { connect } from "react-redux"

const Video = ({ vidjo, platform }) => {
  console.log(platform)
  return (
    <Container platform={platform}>
      <Player
        frameBorder="0"
        title={vidjo.vidjotitill}
        frameBorder="0"
        controls
      >
        <Source type="video/webm" src={vidjo.vidjourl.publicURL}></Source>
      </Player>
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})
export default connect(mapStateToProps)(Video)
