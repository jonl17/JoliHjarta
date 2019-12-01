import styled, { css } from "styled-components"
import { sizes } from "../../../../../constants"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Date = styled.div`
  font-weight: bold;
  position: relative;
`
export const Number = styled.p`
  font-size: 75px;
  margin: 0;
`
export const Month = styled.p`
  font-size: ${sizes.paraMed};
  margin: 0%;
  position: absolute;
  top: 70px;
`
export const Description = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  ${props =>
    props.platform === `simi` &&
    css`
      grid-area: texti;
    `}
`
