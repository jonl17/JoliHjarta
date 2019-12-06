import styled from "styled-components"
import { colors, layer } from "../../../constants"

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 100%;
  background: ${colors.lightgray};
  z-index: ${layer.zero};
  /** flexer */
  display: flex;
  align-content: center;
  justify-content: space-between;
`
