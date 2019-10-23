import styled from "styled-components"
import { margins, layer } from "../../../constants"

export const Container = styled.div`
  height: 25px;
  width: 32px;
  position: fixed;
  top: ${margins.small};
  right: ${margins.small};
  z-index: ${layer.zero};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: 5px;
  width: 100%;
  background: white;
`
