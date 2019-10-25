import React from "react"
import { Container, Player, Source } from "./Styled"
import Poster from "./postervideo.png"

const Video = ({ video }) => {
  console.log(Poster)
  return (
    <Container>
      <Player poster={Poster} controls>
        <Source src={video.publicURL}></Source>
      </Player>
    </Container>
  )
}

export default Video
