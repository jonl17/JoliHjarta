import styled, { css } from "styled-components"
import { sizes, Button } from "../../../../../constants"

export const Title = styled.p`
  font-size: ${sizes.paraMed};
  text-align: center;
  font-weight: bold;
  margin: 0;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 3% 3% 3%;
  grid-gap: 10px;
`
export const BTN = styled(Button)`
  flex: 0 50%;
  justify-content: center;
`
export const EventText = styled.span`
  padding: 3px;
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`
