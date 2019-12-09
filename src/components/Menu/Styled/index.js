import styled, { css } from "styled-components"
import { colors, layer } from "../../../constants"

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 195px;
  width: 100%;
  background: ${colors.lightgray};
  z-index: ${layer.zero};
  /** flexer */
  display: flex;
  align-content: center;

  /** display status controlled by prop display */
  height: 0;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  ${props =>
    props.display === `open` &&
    css`
      height: 75px;
      overflow: visible;
    `}
`
export const ClickZone = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  z-index: ${layer.one};
  display: ${props => props.display};
`
