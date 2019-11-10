import styled from "styled-components"
import HusarodSVG from "../../../../../../static/myndir/husarod2.svg"
import { layer } from "../../../../../constants"

export const HusSVG = styled(HusarodSVG)`
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  bottom: -92px;
  z-index: ${layer.borg};
`
