import React from "react"
import { Container, Player } from "./Styled"
import Poster from "./postervideo.png"

const Video = ({ video }) => {
  return (
    <Container>
      <Player
        title={video.title}
        src={video}
        poster={Poster}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></Player>
    </Container>
  )
}
export default Video