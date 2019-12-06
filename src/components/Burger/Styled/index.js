import styled from "styled-components"
import { margins, layer, sizes } from "../../../constants"

export const ExtraContainer = styled.div`
  height: 100%;
  width: 500px;
  position: relative;
`

export const Container = styled.div`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15.5px;
  margin-left: -15.5px;
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
