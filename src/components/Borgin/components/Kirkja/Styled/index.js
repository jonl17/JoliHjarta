import KirkjaSVG from "../../../../../../static/myndir/kirkja.svg"
import styled from "styled-components"
import { layer } from "../../../../../constants"

export const KirkjanSVG = styled(KirkjaSVG)`
  height: 100%;
  position: absolute;
  top: 10px;
  z-index: ${layer.kirkja};
`
