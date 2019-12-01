import styled, { css } from "styled-components"
import { layer, colors } from "../../../constants"

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
  grid-template-rows: .5fr 1fr auto;
  grid-template-areas: "banner"
                       "video"
                       "footer";
  grid-gap: 10px;
  z-index: ${layer.zero};
  box-sizing: border-box;
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
      overflow-y: scroll;
    `}
  ${props =>
    props.platform === `simi` &&
    css`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0%;
      grid-template-rows: 0.5fr 1fr 1fr auto;
      grid-template-areas:
        "banner"
        "video"
        "texti"
        "footer";
      overflow-y: scroll;
    `}
`
