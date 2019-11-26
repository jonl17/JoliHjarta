import styled from "styled-components"
import Img from "gatsby-image"
import { margins, layer, sizes } from "../../../constants"
import SVG from "../../../../static/myndir/Moon_2-01.svg"

export const Container = styled.div`
  position: absolute;
  top: ${margins.small};
  left: ${margins.small};
  z-index: ${layer.two};
`
export const Image = styled(Img)`
  height: 100%;
`
export const CountdownBox = styled.div`
  display: flex;
  align-content: center;
  position: absolute;
  right: -60px;
  transform: rotate(25deg);
`
export const Number = styled.p`
  font-size: ${sizes.paraSmall};
  color: yellow;
  font-weight: bold;
  margin: 0;
  transform-origin: top center;
  transform: ${props => "rotate(" + props.rotation + "deg)"};
  transform-origin: ${props => props.origin};
`
export const Moon = styled(SVG)`
  height: 100px;
  width: 100px;
`
