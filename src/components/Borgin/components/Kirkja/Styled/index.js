import KirkjaSVG from "../../../../../../static/myndir/kirkja2.svg"
import styled from "styled-components"
import { layer } from "../../../../../constants"

export const KirkjanSVG = styled(KirkjaSVG)`
  height: 35%;
  position: absolute;
  top: -25%;
  z-index: ${layer.kirkja};
  /* perspektív*/
  content: " ";
  transform: translateZ(-3px) scale(3.5);
  background-size: 100%;
`
