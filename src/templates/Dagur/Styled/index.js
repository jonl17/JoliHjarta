import styled from "styled-components"
import { colors, sizes, margins } from "../../../constants"

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  padding: ${margins.large} ${margins.large} 0 ${margins.large};
  border: ${sizes.line} solid ${colors.darkgray};
  width: 100%;
  background: ${colors.lightgray};
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "events calender";
`
