import KirkjaSVG from "../../../../../../static/myndir/kirkja.svg"
import styled from "styled-components"
import { layer } from "../../../../../constants"

export const KirkjanSVG = styled(KirkjaSVG)`
  height: 100%;
  position: absolute;
  top: 10px;
  left: 500px;
  z-index: ${layer.kirkja};
  /* perspektív*/
  content: " ";
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
`
