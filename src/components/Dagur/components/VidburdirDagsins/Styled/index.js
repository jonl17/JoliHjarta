import styled from "styled-components"
import { colors, sizes } from "../../../../../constants"

export const Box = styled.div`
  background: white;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.p`
  font-size: ${sizes.paraSmall};
  color: ${colors.blue};
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`
export const EventBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`
export const Event = styled.div`
  color: ${colors.blue};
  padding-top: 10px;
`
export const EventName = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
`
export const EventInfo = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
`
