import styled, { css } from "styled-components"
import { layer, sizes } from "../../../constants"

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: ${props => props.display};
  flex-direction: column;
  z-index: ${layer.zero};
`
export const PopupGluggi = styled.div`
  position: relative;
  height: 65%;
  min-height: 550px;
  width: 50%;
  ${props =>
    props.device === "tablet" &&
    css`
      width: 75%;
    `}
  ${props =>
    props.device === "mobile" &&
    css`
      width: 90%;
    `}
  margin: auto;
  background: #e5e5e5;
  border: 10px solid #797979;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  display: grid;
`
export const Dagsetning = styled.p`
  font-size: ${sizes.paraLarge};
  margin: auto;
  font-weight: bold;
`
export const VideoTitle = styled.p`
  font-size: ${sizes.paraMed};
  margin: 0;
  text-align: center;
`
