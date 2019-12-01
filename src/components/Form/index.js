import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const Form = () => {
  return (
    <Wrapper>
      <Iframe src="https://script.google.com/macros/s/AKfycbxFop40dXC6gF7tKAoF1s2OXTlr1dJkddRUPuamRUtcpPyPilIa/exec"></Iframe>
    </Wrapper>
  )
}

export default Form
