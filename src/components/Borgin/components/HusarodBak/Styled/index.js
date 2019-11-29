import styled, { css } from "styled-components"
import HusarodSVG from "../../../../../../static/myndir/svgs/husarod2.svg"
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
