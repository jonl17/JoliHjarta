import styled, { css } from "styled-components"
import { LinkButton, Button, sizes } from "../../../constants"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 5% 0 3% 0;
  width: 100%;
  ${props =>
    props.fixed &&
    css`
      position: fixed;
      bottom: 5px;
      left: 0;
      padding: 0% 10% 5% 10%;
    `}
`
export const Text = styled.p`
  text-align: center;
  width: 100%;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`
export const LinkBTN = styled(LinkButton)``
export const BTN = styled(Button)``
