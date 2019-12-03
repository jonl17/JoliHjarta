import React from "react"
import styled from "styled-components"
import ExitBTN from "../components/ExitBTN"

const Wrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  width: 100%;
  height: 600px;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const SenduInnEfni = () => {
  return (
    <Wrap className="forms-studio">
      <ExitBTN type={"link"} slug={"/"} tight></ExitBTN>
      <Iframe src="https://script.google.com/macros/s/AKfycbxFop40dXC6gF7tKAoF1s2OXTlr1dJkddRUPuamRUtcpPyPilIa/exec"></Iframe>
    </Wrap>
  )
}

export default SenduInnEfni
