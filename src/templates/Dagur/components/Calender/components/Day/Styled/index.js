import styled, { css } from "styled-components"
import { colors, sizes } from "../../../../../../../constants"
import { Link } from "gatsby"

export const Box = styled(Link)`
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
  text-decoration: none;
  color: inherit;
`
export const Number = styled.p`
  font-weight: bold;
  font-size: ${sizes.paraSmall};
  margin: auto;
`
