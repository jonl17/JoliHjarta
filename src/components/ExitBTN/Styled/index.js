import styled, { css } from "styled-components"
import { margins, sizes } from "../../../constants"

export const Container = styled.div`
  z-index: 20;
  position: absolute;
  top: 0;
  ${props =>
    props.small &&
    css`
      top: 5px;
    `}
  right: 0;
  &&:hover {
    cursor: pointer;
  }
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${margins.small};
  ${props =>
    props.tight &&
    css`
      margin: 15px;
    `}
  ${props =>
    props.relativeToVideo &&
    css`
      display: none;
      ${props =>
        props.videoFullscreen &&
        css`
          display: flex;
        `}
    `}
`
export const Line = styled.span`
  position: absolute;
  height: ${sizes.line};
  width: 100%;
  ${props =>
    props.small &&
    css`
      height: 4px;
      width: 75%;
    `}
  background: white;
  ${props =>
    props.platform === `simi` &&
    css`
      background: white;
    `}
  transform: rotate(45deg);
  ${props =>
    props.second &&
    css`
      transform: rotate(-45deg);
    `}
`
