import styled from "styled-components"
import { sizes, margins } from "../../../../../constants"
import { Link } from "gatsby"

export const List = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  max-width: 550px;
  margin: auto;
  margin-top: ${margins.xLarge};
`
export const Item = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const Text = styled.p`
  font-size: ${sizes.paraXlarge};
  font-weight: bold;
  margin: 0;
  &&:hover {
    cursor: pointer;
    color: black;
  }
`
