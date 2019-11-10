import KirkjaSVG from "../../../../../../static/myndir/kirkja.svg"
import styled from "styled-components"
import { layer, sizes } from "../../../../../constants"

export const KirkjanSVG = styled(KirkjaSVG)`
  height: 100%;
  position: absolute;
  top: 10px;
  left: 100px;
  z-index: ${layer.kirkja};
`
export const CountdownBox = styled.div`
  opacity: ${props => props.opacity};
  transition: 0.2s;
  background: transparent;
  position: absolute;
  height: 132px;
  width: 96px;
  left: 473px;
  top: 155px;
  z-index: ${layer.borg};
  box-sizing: border-box;
  padding: 2.5px;
`
export const Text = styled.p`
  color: gold;
  font-size: ${sizes.paraSmall};
  margin: 0;
  display: flex;
  justify-content: space-between;
`
export const Time = styled.span`
  font-weight: bold;
  font-size: ${sizes.paraMed};
`
