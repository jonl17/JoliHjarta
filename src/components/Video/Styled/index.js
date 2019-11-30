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
      background: black;
    `}
`
export const Player = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
/*
  transition: 0.3s;
  box-sizing: border-box;
  ${props =>
    props.platform === `simi` &&
    css`
      z-index: 20;
      height: auto;
      ${props =>
        props.open === `100%` &&
        css`
          height: auto;
          top: 100px;
        `}
    `}
  ${props =>
    props.open === `100%` &&
    css`
      padding: ${margins.small};
    `}
  margin: auto;
  */
`
export const Source = styled.source``
