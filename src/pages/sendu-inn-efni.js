import React from "react"
import styled from "styled-components"
import ExitBTN from "../components/ExitBTN"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
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
