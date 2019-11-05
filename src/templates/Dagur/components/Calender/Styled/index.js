import styled from "styled-components"
import { margins } from "../../../../../constants"

export const Container = styled.div`
  height: 90%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  grid-gap: ${margins.xSmall};
`
