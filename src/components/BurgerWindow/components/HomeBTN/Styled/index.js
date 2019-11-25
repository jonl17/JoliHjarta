import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { sizes, margins, colors, layer } from "../../../../../constants"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  margin: auto;
  grid-area: homebtn;
  ${props =>
    props.platform === `simi` &&
    css`
      position: absolute;
      top: ${margins.small};
      left: ${margins.small};
      z-index: ${layer.one};
      height: auto;
      width: auto;
    `}
`
export const Text = styled(Link)`
  font-size: ${sizes.paraLarge};
  color: white;
  font-weight: bold;
  margin: ${margins.xLarge} ${margins.xLarge} auto auto;
  text-decoration: none;
  color: white;
  ${props =>
    props.platform === `simi` &&
    css`
      font-size: ${sizes.paraMed};
      margin: 0;
      font-weight: bold;
    `}
  &&:hover {
    color: ${colors.hover};
  }
`
