import styled from "styled-components"
import { colors, sizes } from "../../../../../constants"

export const Box = styled.div`
  background: white;
  box-sizing: border-box;
  padding: 25px;
`
export const Title = styled.p`
  color: ${colors.lightgray};
  font-size: ${sizes.paraLarge};
  height: 75px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin: 0;
  display: inline-block;
`
export const Text = styled.p`
  color: ${colors.lightgray};
  font-size: ${sizes.paraSmall};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-top: 0;
`
