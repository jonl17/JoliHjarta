import styled from "styled-components"
import { sizes } from "../../../../../constants"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
`
export const Date = styled.div`
  font-weight: bold;
  position: relative;
`
export const Number = styled.p`
  font-size: 90px;
  margin: 0;
  position: absolute;
  top: -30px;
`
export const Month = styled.p`
  font-size: ${sizes.paraMed};
  margin: 0%;
  position: absolute;
  top: 70px;
`
export const Description = styled.p`
  font-size: ${sizes.paraSmall};
  margin: 0;
`
