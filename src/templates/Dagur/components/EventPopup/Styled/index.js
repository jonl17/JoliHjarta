import styled, { css } from "styled-components"
import { margins, colors, layer, sizes } from "../../../../../constants"
import Img from "gatsby-image"

export const Texti = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-left: ${margins.large};
  margin-right: ${margins.large};
  margin-top: 0;
  ${props =>
    props.platform === `simi` &&
    css`
      margin: 0;
      font-size: 13px;
      line-height: 1.5;
    `}
`

export const ImageContainer = styled.div`
  height: 250px;
  width: 250px;
  margin: 10px auto 10px auto;
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
`

export const CloseSensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: ${layer.one};
  display: ${props => props.display};
  background: transparent;
  top: 0;
  left: 0;
`

export const PopupGluggi = styled.div`
  position: fixed;
  background: ${colors.blue};
  border: 10px solid white;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  color: white;
  display: ${props => props.display};
  grid-template-rows: .3fr 1fr 1fr;
  grid-template-areas: "banner"
                       "mynd"
                       "lysing";
  grid-gap: 10px;
  z-index: ${layer.zero};
  box-sizing: border-box;
  padding:${margins.xSmall};
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
