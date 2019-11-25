import styled, { css } from "styled-components"
import { sizes, margins, colors } from "../../../../../constants"
import { Link } from "gatsby"

export const List = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  margin: auto;
  margin-top: ${margins.xLarge};
  ${props =>
    props.platform === `simi` &&
    css`
      margin: 0 0 0 ${margins.small};
      padding: 0;
    `}
  grid-area: menu;
`
export const Item = styled(Link)`
  text-decoration: none;
  color: inherit;
  &&:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`
export const Wrap = styled.div`
  font-size: ${sizes.paraXlarge};
  ${props =>
    props.device === `simi` &&
    css`
      font-size: ${sizes.paraLarge};
    `}
  font-weight: bold;
  margin: 0;
`
