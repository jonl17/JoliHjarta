import React from "react"
import PlaySVG from "../../../../../static/myndir/svgs/play-circle-solid.svg"
import "./index.css"
import styled from "styled-components"
import { connect } from "react-redux"
import { triggerVideoFullscreen } from "../../../../state/action"

const Container = styled.div`
  object-fit: cover;
  width: 100%;
  height: 250px;
  color: white;
  margin: auto;
  display: grid;
  background: white;
  &&:hover {
    cursor: pointer;
  }
`

const PlayBTN = ({ dispatch }) => {
  return (
    <Container onClick={() => dispatch(triggerVideoFullscreen())}>
      <PlaySVG></PlaySVG>
    </Container>
  )
}

export default connect()(PlayBTN)
