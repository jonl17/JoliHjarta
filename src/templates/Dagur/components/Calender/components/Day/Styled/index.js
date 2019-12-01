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
  background: white;
  margin: auto;
  display: grid;

  text-decoration: none;
  color: ${colors.blue};
  transition: 0.1s;
  box-sizing: border-box;
  &&:hover {
    background: ${colors.blue};
    color: white;
    border: 2px solid ${colors.lightgray};
  }
  ${props =>
    props.selected === "yes" &&
    css`
      background: ${colors.blue};
      border: 2px solid white;
      color: white;
    `}
`
export const Number = styled.p`
  font-weight: bold;
  font-size: ${sizes.paraSmall};
  margin: auto;
`
