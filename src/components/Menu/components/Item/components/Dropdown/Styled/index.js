import styled, { css } from "styled-components"
import { layer, colors } from "../../../../../../../constants"

const BoxStyle = css`
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
`

/** mobile version */
export const MobileBox = styled.div`
  ${BoxStyle};
  width: auto;
  padding: 0 15px 0 15px;
  height: 0;
  ${props =>
    props.height === `100%` &&
    css`
      height: 100%;
      overflow: visible;
    `}
  position: absolute;
  grid-area: content;
  left: 0;
  top: 0;
  background: white;
  transition: 0.2s ease-in-out;
  opacity: ${props => props.opacity};
`

/** browser version */

export const Box = styled.div`
  ${BoxStyle};
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
  color: inherit;
  &&:hover {
    color: ${colors.blue};
  }
`
export const Texti = styled.p`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  line-height: 1.5;
  padding-right: 15px;
`
export const TextContainer = styled.div`
  ${props =>
    props.platform === `simi` &&
    css`
      background: white;
      color: ${colors.lightgray};
      padding-left: 50px;
    `}
`
