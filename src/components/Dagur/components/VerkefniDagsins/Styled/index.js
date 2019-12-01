import styled from "styled-components"
import { colors, sizes } from "../../../../../constants"

export const Box = styled.div`
  background: white;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const Title = styled.p`
  font-size: ${sizes.paraSmall};
  color: ${colors.blue};
  margin: 0;
  font-weight: bold;
`
export const Texti = styled.p`
  color: ${colors.blue};
`
