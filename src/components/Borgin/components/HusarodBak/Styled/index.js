import styled, { css } from "styled-components"
import HusarodSVG from "../../../../../../static/myndir/svgs/husarod2.svg"
import VelkominSVG from "../../../../../../static/myndir/svgs/velkomin.svg"
import { layer } from "../../../../../constants"

export const HusSVG = styled(HusarodSVG)`
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  left: 0px;
  bottom: -72px;
  z-index: ${layer.borg};
  /* perspective effect */
  ${props =>
    props.device === `browser` &&
    css`
      transform: translateZ(-2px) scale(1.7);
      background-size: 100%;
    `}
`
export const Velkomin = styled(VelkominSVG)`
  position: absolute;
  height: 65%;
  max-width: 350px;
  left: 300px;
  z-index: ${props => props.zindex};
  /* perspective effect */
  ${props =>
    props.device === `browser` &&
    css`
      transform: translateZ(-2px) scale(1.7);
      background-size: 100%;
      max-width: 500px;
      top: -20%;
      left: 100%;
    `}
`
