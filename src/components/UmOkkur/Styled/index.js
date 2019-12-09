import styled from "styled-components"
import { colors, sizes } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.lightgray};
  position: absolute;
  top: 0;
  left: 0;
`
export const Title = styled.p`
  height: 75px;
  padding: 75px 25px 25px 25px;
  font-size: ${sizes.paraLarge};
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin: 0;
`
