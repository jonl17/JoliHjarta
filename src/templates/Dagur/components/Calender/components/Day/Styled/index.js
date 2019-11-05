import styled, { css } from "styled-components"
import { colors, sizes } from "../../../../../../../constants"

export const Box = styled.div`
  height: 55px;
  width: 55px;
  background: ${colors.boxgray};
  margin: auto;
  display: grid;
  ${props =>
    props.selected === "yes" &&
    css`
      background: green;
    `}
`
export const Number = styled.p`
  font-weight: bold;
  font-size: ${sizes.paraSmall};
  margin: auto;
`
