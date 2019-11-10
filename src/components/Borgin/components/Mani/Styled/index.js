import styled from "styled-components"
import Img from "gatsby-image"
import { margins, layer } from "../../../../../constants"

export const Container = styled.div`
  position: absolute;
  top: ${margins.small};
  left: ${margins.small};
  z-index: ${layer.two};
`
export const Image = styled(Img)`
  height: 100%;
`
