import styled from "styled-components"
import { sizes, margins, layer } from "../../../../../constants"
import { Link } from "gatsby"

export const Container = styled(Link)`
  position: fixed;
  top: ${margins.small};
  left: ${margins.small};
  z-index: ${layer.one};
  text-decoration: none;
  color: inherit;
`
export const Text = styled.p`
  font-size: ${sizes.paraMed};
  margin: 0;
  font-weight: bold;
`
