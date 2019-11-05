import styled from "styled-components"
import { sizes, margins } from "../../../../../constants"
import Img from "gatsby-image"

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`
export const Title = styled.p`
  font-size: ${sizes.paraLarge};
  font-weight: bold;
  text-align: center;
  margin: ${margins.xSmall};
`
export const DirectionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Klukkan = styled.p`
  font-weight: bold;
  text-align: right;
  padding-right: ${margins.xSmall};
  font-size: ${sizes.paraSmall};
  margin: 0;
`
export const Hvar = styled.p`
  text-align: left;
  padding-left: ${margins.xSmall};
  width: 100%;
  font-size: ${sizes.paraSmall};
  margin: 0;
`
export const Image = styled(Img)`
  height: 300px;
  width: 300px;
  margin: auto;
`
