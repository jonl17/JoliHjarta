import styled from "styled-components"
import { Link } from "gatsby"
import { sizes } from "../../../../../constants"

export const List = styled.ul`
  grid-area: submenu;
  margin: auto 150px auto auto;
`
export const Item = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const Text = styled.p`
  color: white;
  font-size: ${sizes.paraMed};
  margin: 10px 0 0 0;
  &&:hover {
    cursor: pointer;
    color: black;
  }
`
