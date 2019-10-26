import styled, { css } from "styled-components"
import { sizes, Button } from "../../../../../constants"

export const Title = styled.p`
  font-size: ${sizes.paraMed};
  text-align: center;
  font-weight: bold;
  margin: 0;
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
