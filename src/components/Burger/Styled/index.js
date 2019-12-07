import styled, { css } from "styled-components"
import { layer, sizes } from "../../../constants"

export const Container = styled.div`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 22px;
  right: 50px;
  z-index: ${layer.zero};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: ${sizes.line};
  width: 100%;
  background: white;
  transition: 0.2s ease-in-out;
  ${props =>
    props.ex &&
    css`
      ${props =>
        props.one &&
        css`
          transform: translateY(7px) rotate(-135deg);
        `}
      ${props =>
        props.two &&
        css`
          transform: translateY(-10px) rotate(-45deg);
        `}
    `}
`
