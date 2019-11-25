import styled, { css } from "styled-components"
import { sizes, colors, margins } from "../../../../../constants"

export const List = styled.ul`
  grid-area: submenu;
  margin: auto 150px auto auto;
  ${props =>
    props.platform === `simi` &&
    css`
      margin: 0 ${margins.small} 0 0%;
      text-align: right;
    `}
`
export const Item = styled.a`
  text-decoration: none;
  color: inherit;
`
export const Text = styled.p`
  color: white;
  font-size: ${sizes.paraMed};
  margin: 10px 0 0 0;
  &&:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`
