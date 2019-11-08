import styled from "styled-components"
import { colors, sizes, margins } from "../../../constants"

export const Container = styled.div`
  box-sizing: border-box;
  border: ${sizes.line} solid ${colors.darkgray};
  padding: ${margins.large} ${margins.large} 0 ${margins.large};
  background: ${colors.lightgray};
  min-height: 100vh;
`
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "events calender";
`
