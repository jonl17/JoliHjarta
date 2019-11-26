import KirkjaSVG from "../../../../../../static/myndir/kirkja_klukka.svg"

import styled, { css } from "styled-components"
import { layer } from "../../../../../constants"

export const KirkjanSVG = styled(KirkjaSVG)`
  height: 40%;
  position: absolute;
  z-index: ${layer.kirkja};
  top: 5%;

  /* perspective effect */
  ${props =>
    props.device === `browser` &&
    css`
      transform: translateZ(-4px) scale(3.5);
      background-size: 100%;
      top: -40%;
    `}
`
