import styled from "styled-components"
import { colors, sizes } from "../../../../../constants"

export const Box = styled.div`
  background: white;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.p`
  font-size: ${sizes.paraSmall};
  color: ${colors.blue};
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
`
export const Texti = styled.p`
  font-size: 14px;
  color: ${colors.blue};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`
