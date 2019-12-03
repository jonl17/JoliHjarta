import styled, { css } from "styled-components"
import { margins, sizes } from "../../../constants"
import { Link } from "gatsby"

export const Container = styled.div`
  z-index: 20;
  position: absolute;
  top: 0;
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
    props.tight === "true" &&
    css`
      margin: 15px;
    `}
  ${props =>
    props.relativetovideo &&
    css`
      display: none;
      ${props =>
        props.videofullscreen &&
        css`
          display: flex;
        `}
    `}
`
export const Line = styled.span`
  position: absolute;
  height: ${sizes.line};
  width: 100%;
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
export const LinkContainer = styled(Link)`
  z-index: 20;
  position: absolute;
  top: 0;
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
    props.tight === "true" &&
    css`
      margin: 15px;
    `}
`
