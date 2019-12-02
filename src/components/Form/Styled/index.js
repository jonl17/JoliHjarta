import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${props =>
    props.platform === `simi` &&
    css`
      overflow-x: hidden;
      overflow-y: scroll;
    `}
`
export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`
