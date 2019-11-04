import styled from "styled-components"
import { margins } from "../../../../../constants"

export const Title = styled.p`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const EventTable = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${margins.small};
  margin-left: auto;
  margin-right: auto;
`
