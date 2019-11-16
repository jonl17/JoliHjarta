import styled from "styled-components"
import HusSVG from "../../../../../../static/myndir/husarod3.svg"
import { layer } from "../../../../../constants"

export const Husin = styled(HusSVG)`
  height: 100%;
  position: absolute;
  bottom: -55px;
  z-index: ${layer.hus};
  /* husin góð */
  content: " ";
  transform: translateZ(-2px) scale(3);
  background-size: 100%;
`
