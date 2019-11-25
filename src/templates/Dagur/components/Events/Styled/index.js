import styled, { css } from "styled-components"
import { margins } from "../../../../../constants"

export const Title = styled.p`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const EventTable = styled.div`
  display: grid;
  grid-gap: ${margins.small};
  top: 125px;
  ${props =>
    props.platform === `stor-skjar` &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}
  ${props =>
    props.platform === `litill-skjar` &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
  ${props =>
    props.platform === `spjald-tolva` &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
  ${props =>
    props.platform === `simi` &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`
