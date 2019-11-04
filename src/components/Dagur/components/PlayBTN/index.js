import React from "react"
import PlaySVG from "../../../../../static/myndir/play-circle-solid.svg"
import "./index.css"
import styled from "styled-components"
import { colors } from "../../../../constants"

const Container = styled.div`
  max-height: 150px;
  height: 100%;
  color: ${colors.gray};
  margin: auto;
  &&:hover {
    cursor: pointer;
  }
`

const PlayBTN = () => {
  return (
    <Container>
      <PlaySVG></PlaySVG>
    </Container>
  )
}

export default PlayBTN
