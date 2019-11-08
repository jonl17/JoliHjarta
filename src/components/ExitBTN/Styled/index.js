import styled, { css } from "styled-components"
import { margins, sizes } from "../../../constants"

export const Container = styled.div`
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
`
export const Line = styled.span`
  position: absolute;
  height: ${sizes.line};
  width: 100%;
  background: white;
  transform: rotate(45deg);
  ${props =>
    props.second &&
    css`
      transform: rotate(-45deg);
    `}
`
