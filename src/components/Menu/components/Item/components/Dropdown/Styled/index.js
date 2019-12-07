import styled, { css } from "styled-components"
import { layer } from "../../../../../../../constants"

export const Box = styled.div`
  position: absolute;
  background: transparent;
  display: grid;
  width: 100%;
  z-index: ${layer.one};
  top: 75px;
  left: 50px;
  overflow: hidden;
  padding-bottom: 15px;
  box-sizing: border-box;
  ${props =>
    props.nafn === `Hlekkir` &&
    css`
      height: 175px;
    `}
  ${props =>
    props.nafn === `Um okkur` &&
    css`
      height: 100%;
      width: 500px;
    `}
`
export const Hlekkur = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  width: 100%;
  display: block;
  margin: auto;
  &&:hover {
    color: black;
  }
`
export const Texti = styled.p`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  line-height: 1.5;
`
