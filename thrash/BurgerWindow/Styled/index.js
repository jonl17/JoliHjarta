import styled, { css } from "styled-components"
import { layer } from "../../../src/constants"

export const ClickZone = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  z-index: ${layer.one};
  display: ${props => props.display};
`

export const ContainerMobile = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #F3797E;
  z-index: ${layer.zero};
  ${props =>
    props.opacity === 0 &&
    css`
      z-index: -1;
    `}
  opacity: ${props => props.opacity};
  transition: .3s;
  color: white;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "menu homebtn"
                       "... submenu";
  ${props =>
    props.platform === `simi` &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
        "homebtn"
        "menu"
        "submenu";
    `}
`
export const Container = styled.div`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #F3797E;
  z-index: 20;
  ${props =>
    props.opacity === 0 &&
    css`
      z-index: -1;
    `}
  opacity: ${props => props.opacity};
  transition: .3s;
  color: white;
  display: flex;
`
