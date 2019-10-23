import styled from "styled-components"
import { layer } from "../../../constants"

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: ${props => props.display};
  z-index: ${layer.zero};
`
export const PopupGluggi = styled.div`
  height: 65%;
  width: 50%;
  margin: auto;
  background: #e5e5e5;
  border: 10px solid #797979;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  position: relative;
`
export const Texti = styled.p`
  font-size: 40px;
  margin: auto;
`
