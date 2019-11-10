import styled, { css } from "styled-components"
import { colors, sizes } from "../../../../../../../constants"
import { Link } from "gatsby"

export const Box = styled(Link)`
  
  height: 45px;
  width: 45px;
  ${props =>
    props.device === `browserLarge` &&
    css`
      height: 55px;
      width: 55px;
    `}
  background: ${colors.boxgray};
  margin: auto;
  display: grid;
  ${props =>
    props.selected === "yes" &&
    css`
      background: green;
      border: 2px solid black;
    `}
  text-decoration: none;
  color: inherit;
  transition: 0.1s;
  box-sizing: border-box;
  &&:hover {
    background: ${colors.darkgray};
    color: white;
    border: 2px solid white;
  }
`
export const Number = styled.p`
  font-weight: bold;
  font-size: ${sizes.paraSmall};
  margin: auto;
`
