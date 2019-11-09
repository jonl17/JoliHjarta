import styled, { css } from "styled-components"
import { colors, sizes, margins, layer } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.lightgray};
  z-index: ${layer.one};
  ${props =>
    props.opacity === 0 &&
    css`
      z-index: -1;
    `}
  opacity: ${props => props.opacity};
  transition: .3s;
`
