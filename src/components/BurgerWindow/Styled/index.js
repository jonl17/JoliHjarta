import styled, { css } from "styled-components"
import { layer } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(46, 49, 146, 0.86);
  z-index: ${layer.zero};
  ${props =>
    props.opacity === 0 &&
    css`
      z-index: -1;
    `}
  opacity: ${props => props.opacity};
  transition: .3s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  color: white;
`
