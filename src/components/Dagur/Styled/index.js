import styled, { css } from "styled-components"
import { layer, colors, margins, sizes } from "../../../constants"

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  ${props =>
    props.platform === `spjaldtolva` &&
    css`
      grid-template-columns: 1fr;
    `}
  ${props =>
    props.platform === `simi` &&
    css`
      grid-template-columns: 1fr;
    `}
  grid-gap: 10px;
  grid-area: footer;
  padding-bottom: 5px;
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
overflow-y: scroll;
  position: fixed;
  background: ${colors.blue};
  border: 10px solid white;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  color: white;
  display: ${props => props.display};
  grid-template-rows: .1fr 1fr auto;
  grid-template-areas: "banner"
                       "video"
                       "footer";
  grid-gap: 10px;
  z-index: ${layer.zero};
  box-sizing: border-box;
  padding: 0 ${margins.xSmall};
  /** sizes need to be scaled carefully with this one */
  top: 50%;
  left: 50%;
  ${props =>
    props.platform === `stor-skjar` &&
    css`
      height: 750px;
      width: 600px;
      margin-top: -375px;
      margin-left: -300px;
    `}
  ${props =>
    props.platform === `litill-skjar` &&
    css`
      height: 90vh;
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
      overflow-y: scroll;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0%;
      grid-template-rows: auto auto 1fr auto;
      grid-template-areas:
        "banner"
        "texti"
        "video"
        "footer";
    `}
`
export const VideoTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: ${sizes.paraSmall};
  font-weight: bold;
  color: white;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
  ${props =>
    props.platform === `simi` &&
    css`
      grid-area: texti;
      margin: 0;
      padding: 0;
    `}
`
