import React from "react"
import styled from "styled-components"
import ExitBTN from "../components/ExitBTN"

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  /* -webkit-overflow-scrolling: touch; */
`

const SenduInnEfni = () => {
  return (
    <>
      <Wrap className="forms-studio">
        <Iframe src="https://script.google.com/macros/s/AKfycbxFop40dXC6gF7tKAoF1s2OXTlr1dJkddRUPuamRUtcpPyPilIa/exec"></Iframe>
      </Wrap>
      <ExitBTN type={"link"} slug={"/"}></ExitBTN>
    </>
  )
}

export default SenduInnEfni
