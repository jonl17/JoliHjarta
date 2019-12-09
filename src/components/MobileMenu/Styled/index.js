import styled from "styled-components"
import { colors, layer } from "../../../constants"

export const Container = styled.div`
  height: ${props => props.display};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.lightgray};
  z-index: ${layer.zero};
  transition: 0.2s ease-in-out;
  overflow: hidden;
  overflow-y: scroll;

  /** flexer */
  display: grid;
  flex-direction: column;
  justify-content: space-evenly;
  grid-gap: 25px;
`
