import styled, { css } from "styled-components"

export const Container = styled.div`
  overflow-y: hidden;
  height: 100%;
  width: 100%;
  display: inline-block;
  position: absolute;
  /** perspective effect */
  ${props =>
    props.device === `browserSmall` &&
    css`
      perspective: 2px;
    `}
  ${props =>
    props.device === `browserLarge` &&
    css`
      perspective: 2px;
    `}
`
export const Background = styled.div`
  position: fixed;
  height: 70%;
  width: 100%;
  background: linear-gradient(0deg, #ffffff 0%, #b8b3e6 40.54%, #5247c3 100%);
`
