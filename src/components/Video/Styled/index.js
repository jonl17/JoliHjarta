import styled, { css } from "styled-components"
import { margins } from "../../../constants"

export const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 20;
  transition: 0.1s ease-in-out;
  width: 100%;
  height: ${props => props.open};
  background: black;
  ${props =>
    props.platform === `simi` &&
    css`
      padding-bottom: 300px;
    `}
`
export const Player = styled.iframe`
  object-fit: contain;
  padding: 15px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  width: 100%;
`
export const Source = styled.source``
