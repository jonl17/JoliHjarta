import styled from "styled-components"
import Img from "gatsby-image"
import { margins } from "../../../../../constants"

export const Container = styled.div`
  position: absolute;
  top: ${margins.small};
  left: ${margins.small};
`
export const Image = styled(Img)`
  height: 100%;
`
