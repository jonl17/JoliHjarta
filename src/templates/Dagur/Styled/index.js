import styled, { css } from "styled-components"
import { colors, sizes, margins } from "../../../constants"

export const Container = styled.div`
  box-sizing: border-box;
  border: ${sizes.line} solid ${colors.darkgray};
  background: ${colors.lightgray};
  display: inline-block;
  height: 100%;
  width: 100%;
  padding: ${margins.large} ${margins.large} 0 180px;
  ${props =>
    props.platform === `spjaldtolva` &&
    css`
      padding: ${margins.large} 32px;
    `}
  ${props =>
    props.platform === `simi` &&
    css`
      padding: ${margins.large} 32px;
    `}
`
export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "events calender";
  ${props =>
    props.platform === `simi` &&
    css`
      grid-template-columns: 1fr;
      grid-template-areas: "events";
    `}
`
