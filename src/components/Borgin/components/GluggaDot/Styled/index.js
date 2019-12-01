import styled, { css } from "styled-components"
import SVG from "../../../../../../static/myndir/svgs/gluggar-nytt.svg"

// Gatan
import StekkjastaurSVG from "../../../../../../static/myndir/svgs/stekkjastaur.svg"
import MavurSVG from "../../../../../../static/myndir/svgs/mavur.svg"
import HoppSVG from "../../../../../../static/myndir/svgs/hopp.svg"
import MusSVG from "../../../../../../static/myndir/svgs/mus.svg"
import HjolSVG from "../../../../../../static/myndir/svgs/hjol.svg"
import SnjorSVG from "../../../../../../static/myndir/svgs/snjor-layer.svg"

const SVGstyle = css`
  height: 100%;
  position: absolute;
  top: 55px;
  pointer-events: none;
  z-index: ${props => props.zindex};
`
export const Snjor = styled(SnjorSVG)`
  ${SVGstyle};
`
export const Hjol = styled(HjolSVG)`
  ${SVGstyle};
`
export const Mus = styled(MusSVG)`
  ${SVGstyle};
`
export const Hopp = styled(HoppSVG)`
  ${SVGstyle};
`
export const Mavur = styled(MavurSVG)`
  ${SVGstyle};
`

export const Stekkjastaur = styled(StekkjastaurSVG)`
  position: absolute;
  height: 65%;
  top: 20%;
  left: 85%;
  z-index: ${props => props.zindex};
  transition: 0.5s;
`

// Glugga hlutir
export const GluggaHlutir = styled(SVG)`
  ${SVGstyle};
  /* pointer-events: none; */
  z-index: 40;
`
