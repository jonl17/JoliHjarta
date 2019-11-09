import styled from "styled-components"
import { Link } from "gatsby"
import { sizes, margins } from "../../../../../constants"

export const Container = styled(Link)`
  text-decoration: none;
  color: white;
  height: 100%;
  width: 100%;
  display: grid;
  margin: auto;
`
export const Text = styled.p`
  font-size: ${sizes.paraLarge};
  color: black;
  font-weight: bold;
  margin: ${margins.xLarge} auto;
  &&:hover {
    color: white;
  }
`
