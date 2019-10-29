import styled from "styled-components"
import { colors, sizes } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  border: ${sizes.line} solid ${colors.darkgray};
  width: 100%;
  background: ${colors.lightgray};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "left mid right";
`
