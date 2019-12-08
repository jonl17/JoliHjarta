import styled, { css } from "styled-components"
import { sizes, margins, colors } from "../../../../../src/constants"
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
  ${props =>
    props.nav === "true" &&
    css`
      margin: auto;
      display: flex;
      justify-content: space-evenly;
    `}
`
export const Item = styled(Link)`
  text-decoration: none;
  color: inherit;
  &&:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
  ${props =>
    props.nav === "true" &&
    css`
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      margin: auto;
    `}
`
export const Wrap = styled.div`
  font-size: ${sizes.paraXlarge};
  width: 300px;

  ${props =>
    props.device === `simi` &&
    css`
      font-size: ${sizes.paraLarge};
    `}
  font-weight: bold;
  margin: 0;
`
// nav versions
export const WrapNav = styled.div`
  margin: 0;
  display: grid;
  height: 100%;
`
export const ItemNav = styled.a`
  text-decoration: none;
  color: inherit;
  &&:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
  ${props =>
    props.nav === "true" &&
    css`
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      margin: auto;
    `}
`
