import styled from "styled-components"
import { margins, layer, sizes } from "../../../constants"

export const Container = styled.div`
  height: 32px;
  width: 32px;
  position: fixed;
  top: ${margins.small};
  right: ${margins.small};
  z-index: ${layer.zero};
  display: ${props => props.display};
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: ${sizes.line};
  width: 100%;
  background: white;
`
