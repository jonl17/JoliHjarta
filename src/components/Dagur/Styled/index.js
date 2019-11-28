import styled, { css } from "styled-components"
import { layer, colors, margins } from "../../../constants"

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-area: footer;
`

export const CloseSensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: ${layer.one};
  display: ${props => props.display};
  background: transparent;
`
export const PopupGluggi = styled.div`
  position: fixed;
  background: ${colors.blue};
  border: 10px solid white;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  color: white;
  display: ${props => props.display};
  grid-template-rows: 1fr 2fr 1.5fr;
  grid-template-areas: "banner"
                       "video"
                       "footer";
  grid-gap: 10px;
  z-index: ${layer.zero};
  box-sizing: border-box;
  padding:${margins.xSmall};
  /** sizes need to be scaled carefully with this one */
  height: 100%;
  width: 600px;
  top: 50%;
  left: 50%;
  ${props =>
    props.platform === `stor-skjar` &&
    css`
      height: 750px;
      margin-top: -375px;
      margin-left: -300px;
    `}
  ${props =>
    props.platform === `litill-skjar` &&
    css`
      height: 650px;
      width: 600px;
      top: 25px;
      margin-left: -300px;
    `}
  ${props =>
    props.platform === `spjaldtolva` &&
    css`
      height: 100%;
      width: 500px;
      top: 0;
      margin-left: -250px;
    `}
  ${props =>
    props.platform === `simi` &&
    css`
      height: 100%
      width: 100%;
      top: 0;
      left: 0%;
    `}
`
